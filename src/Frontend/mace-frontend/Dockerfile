# Use the official Node.js image as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
#RUN npm run build

# Expose the port the app will run on
EXPOSE 3000


# Define the command to run the application
CMD ["npm", "start"]
