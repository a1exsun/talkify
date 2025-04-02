FROM node:20-alpine

WORKDIR /app

# 复制本地已构建好的 node_modules
COPY node_modules ./node_modules
COPY apps/web/node_modules ./apps/web/node_modules

# 复制本地已构建好的 .next 目录和其他必要文件
COPY apps/web/.next ./apps/web/.next
COPY apps/web/public ./apps/web/public
COPY apps/web/next.config.mjs ./apps/web/
COPY apps/web/package.json ./apps/web/

# 定义环境变量，这些值可以被docker run命令中的参数覆盖
ENV NEXT_PUBLIC_SUPABASE_URL=''
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=''
ENV NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL=''
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=''
ENV NEXT_PUBLIC_SANITY_DATASET=''
ENV NEXT_PUBLIC_SANITY_API_READ_TOKEN=''

# 设置工作目录并启动服务
WORKDIR /app/apps/web
EXPOSE 3000
CMD ["npm", "run", "start"]