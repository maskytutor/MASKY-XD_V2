# Use Node.js 20 with Debian Bullseye
FROM node:20-bullseye

# Install system dependencies for media handling
RUN apt-get update && apt-get install -y \
    ffmpeg \
    imagemagick \
    webp \
 && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (cache optimization)
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g qrcode-terminal pm2

# Copy app source code
COPY . .

# Expose port for Express / API
EXPOSE 3000

# Start the bot
CMD ["npm", "start"]
