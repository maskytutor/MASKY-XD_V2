FROM node:20-bullseye

# Install system dependencies
RUN apt-get update && apt-get install -y \
    ffmpeg \
    imagemagick \
    webp \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Copy dependency files first
# Install dependencies
COPY package*.json ./

RUN npm install --production --legacy-peer-deps

# Copy the rest of the app
COPY . .

EXPOSE 3000
CMD ["npm", "start"]

