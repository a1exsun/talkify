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

# 设置工作目录并启动服务
WORKDIR /app/apps/web
EXPOSE 3000
CMD ["npm", "run", "start"]