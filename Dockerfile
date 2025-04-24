# 第一阶段：构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 复制依赖定义文件（利用 Docker 层缓存优化）
COPY package*.json ./

# 安装依赖（可根据需要调整镜像源）
RUN npm install --registry=https://registry.npmmirror.com

# 复制源代码并构建
COPY . .
RUN npm run build

# 第二阶段：生产环境部署
FROM nginx:alpine

# 删除默认配置
RUN rm /etc/nginx/conf.d/default.conf

# 复制自定义 Nginx 配置（支持 SPA 路由）
COPY nginx.conf /etc/nginx/conf.d/

# 从构建阶段复制产物到 Nginx 目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx（保持前台运行）
CMD ["nginx", "-g", "daemon off;"]