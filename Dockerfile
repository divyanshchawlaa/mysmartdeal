# Use Node 18
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install backend deps
RUN npm install

# Copy all files
COPY . .

# Build frontend with legacy provider fix
WORKDIR /app/frontend

RUN npm install

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

# Go back to root
WORKDIR /app

# Expose backend port
EXPOSE 5001

# Start server
CMD ["npm", "run", "server"]# docker
# docker
