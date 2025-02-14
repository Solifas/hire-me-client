# Stage 1: Build the React application
FROM node:22-alpine as build

# Set working directory
WORKDIR /app

# Install yarn
RUN corepack enable

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application using nginx
FROM nginx:alpine

# Copy the build output from stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration (optional, if you need custom nginx config)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 