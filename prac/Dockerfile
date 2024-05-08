# Use an official Node.js runtime as a parent image
FROM node:14

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Command to run the node.js application
CMD ["node", "adi.js"]
