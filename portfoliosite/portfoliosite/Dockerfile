# Use a smaller base image as builder
FROM debian:bullseye as builder

# Install curl to download Volta
RUN apt-get update && apt-get install -y curl

# Install Volta
RUN curl https://get.volta.sh | bash
ENV VOLTA_HOME /root/.volta
ENV PATH /root/.volta/bin:$PATH

# Set Node.js version
ARG NODE_VERSION=14.18.1

# Install Node.js using Volta
RUN volta install node@${NODE_VERSION}

# Set up work directory
RUN mkdir /app
WORKDIR /app

# Set production environment
ENV NODE_ENV production

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Build the app
RUN npm run build

# Use a smaller base image for the final image
FROM debian:bullseye-slim

# Set work directory
WORKDIR /app

# Copy files from builder
COPY --from=builder /root/.volta /root/.volta
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Set production environment
ENV NODE_ENV production
ENV PATH /root/.volta/bin:$PATH

# Expose port 8080
EXPOSE 8080

# Start the application
CMD [ "npm", "start" ]

# Have a health check
#HEALTHCHECK --interval=30s --timeout=10s CMD curl --fail http://localhost:8080 || exit 1
