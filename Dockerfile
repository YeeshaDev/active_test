# Use the official Node.js image.
FROM node:18-slim

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory into the container
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Set the command to run your app
CMD ["npm", "run", "dev"]
