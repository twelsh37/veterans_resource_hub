# Use multi-stage build for smaller final image
FROM node:20-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package files first to leverage cache
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy source code (respects .dockerignore)
COPY . .

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy files and set correct ownership
COPY --chown=appuser:appgroup . .

# Create .next directory and set permissions
RUN mkdir -p .next && chown -R appuser:appgroup .next

# Install dependencies
RUN yarn install

# Use non-root user
USER appuser

# Define environment variables but don't set values
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
ENV CLERK_SECRET_KEY=""
ENV VA_FORMS_API_KEY=""

EXPOSE 3001

# Start the app
# THIS IS APP IS RUNNING IN DEVMODE. IT SHOULD NOT BE SENT TO PRODUCTION.
CMD ["yarn", "dev"]