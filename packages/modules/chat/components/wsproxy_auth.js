export default {
	async fetch(request, env, ctx) {
	  if (request.headers.get('Upgrade') !== 'websocket') {
		return new Response('Expected WebSocket connection', { status: 400 })
	  }
  
	  const url = new URL(request.url)
	  const pathAndQuery = url.pathname + url.search
	  const targetUrl = `wss://generativelanguage.googleapis.com${pathAndQuery}`
  
	  console.log('Target URL:', targetUrl)
  
	  const [client, proxy] = new WebSocketPair()
	  proxy.accept()
  
	  // Used to store messages received before a connection is established
	  let pendingMessages = []
  
	  const connectPromise = new Promise((resolve, reject) => {
		const targetWebSocket = new WebSocket(targetUrl)
  
		console.log('Initial targetWebSocket readyState:', targetWebSocket.readyState)
  
		targetWebSocket.addEventListener('open', () => {
		  console.log('Connected to target server')
		  console.log('targetWebSocket readyState after open:', targetWebSocket.readyState)
  
		  // After the connection is established, send all pending messages
		  console.log(`Processing ${pendingMessages.length} pending messages`)
		  for (const message of pendingMessages) {
			try {
			  targetWebSocket.send(message)
			  console.log('Sent pending message:', message.slice(0, 100))
			} catch (error) {
			  console.error('Error sending pending message:', error)
			}
		  }
		  pendingMessages = [] // Clear the pending message queue
		  resolve(targetWebSocket)
		})
  
		proxy.addEventListener('message', async (event) => {
		  console.log('Received message from client:', {
			dataPreview: typeof event.data === 'string' ? event.data.slice(0, 200) : 'Binary data',
			dataType: typeof event.data,
			timestamp: new Date().toISOString(),
		  })
  
		  if (targetWebSocket.readyState === WebSocket.OPEN) {
			try {
			  targetWebSocket.send(event.data)
			  console.log('Successfully sent message to gemini')
			} catch (error) {
			  console.error('Error sending to gemini:', error)
			}
		  } else {
			// If the connection has not been established, add the message to the queue to be processed
			console.log('Connection not ready, queueing message')
			pendingMessages.push(event.data)
		  }
		})
  
		targetWebSocket.addEventListener('message', (event) => {
		  console.log('Received message from gemini:', {
			dataPreview: typeof event.data === 'string' ? event.data.slice(0, 200) : 'Binary data',
			dataType: typeof event.data,
			timestamp: new Date().toISOString(),
		  })
  
		  try {
			if (proxy.readyState === WebSocket.OPEN) {
			  proxy.send(event.data)
			  console.log('Successfully forwarded message to client')
			}
		  } catch (error) {
			console.error('Error forwarding to client:', error)
		  }
		})
  
		targetWebSocket.addEventListener('close', (event) => {
		  console.log('Gemini connection closed:', {
			code: event.code,
			reason: event.reason || 'No reason provided',
			wasClean: event.wasClean,
			timestamp: new Date().toISOString(),
			readyState: targetWebSocket.readyState,
		  })
		  if (proxy.readyState === WebSocket.OPEN) {
			proxy.close(event.code, event.reason)
		  }
		})
  
		proxy.addEventListener('close', (event) => {
		  console.log('Client connection closed:', {
			code: event.code,
			reason: event.reason || 'No reason provided',
			wasClean: event.wasClean,
			timestamp: new Date().toISOString(),
		  })
		  if (targetWebSocket.readyState === WebSocket.OPEN) {
			targetWebSocket.close(event.code, event.reason)
		  }
		})
  
		targetWebSocket.addEventListener('error', (error) => {
		  console.error('Gemini WebSocket error:', {
			error: error.message || 'Unknown error',
			timestamp: new Date().toISOString(),
			readyState: targetWebSocket.readyState,
		  })
		})
	  })
  
	  ctx.waitUntil(connectPromise)
  
	  return new Response(null, {
		status: 101,
		webSocket: client,
	  })
	},
  }