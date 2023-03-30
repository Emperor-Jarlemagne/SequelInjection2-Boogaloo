# Use an official Node.js runtime as a parent image
FROM node:14.18.1

# Set the working directory to /app
WORKDIR /portfoliosite/portfoliosite

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the rest of your application files to the container
COPY . .

#RUN groupadd -r myuser && useradd -r -g myuser myuser
#USER myuser

# Expose port 8080
EXPOSE 8080

# Have a health
HEALTHCHECK --interval=30s --timeout=10s CMD curl --fail http://localhost:8080 || exit 1

# Start the application
CMD [ "npm", "start" ]