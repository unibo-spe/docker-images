# Base image, pulled from Docker Hub ("scratch" = empty image)
FROM alpine:3.24.3
# Runs a command
RUN apk add --no-cache nodejs npm
# Sets the working directory (created if missing)
WORKDIR /my-project
# Copies files from the build context into the image: dependencies first...
COPY package.json ./
# ... so this (slow) layer stays cached until package.json changes
RUN npm install
# Copies the rest of the project (relative to the build context)
COPY . .
# Adds a new environment variable
ENV SERVICE_PORT=8080
# Documents the port the service listens on
EXPOSE 8080
# Configures the default command to execute (exec form)
CMD ["npm", "run", "service"]
