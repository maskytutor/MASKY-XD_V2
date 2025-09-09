FROM node:20-bullseye

# Install system dependencies
RUN apt-get update && apt-get install -y \
    ffmpeg \
    imagemagick \
    webp \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Copy dependency files first
COPY package*.json ./

# Install dependencies (no global installs needed!)
RUN npm install --production

# Copy the rest of the app
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
