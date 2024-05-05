# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port and define command to run the app
EXPOSE 3000
CMD ["npm", "start"]
