# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first to leverage cache
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy source code and config files
COPY . .

# Build the application (only for production)
ARG BUILD_ENV=production
RUN if [ "$BUILD_ENV" = "production" ]; then yarn build; fi

# Final stage
FROM node:20-alpine AS runner

ARG BUILD_ENV=production
WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy package files and TypeScript config
COPY --from=builder --chown=appuser:appgroup /app/package.json ./
COPY --from=builder --chown=appuser:appgroup /app/yarn.lock ./
COPY --from=builder --chown=appuser:appgroup /app/tsconfig.json ./
COPY --from=builder --chown=appuser:appgroup /app/tailwind.config.ts ./
COPY --from=builder --chown=appuser:appgroup /app/postcss.config.mjs ./

# Install dependencies based on environment
RUN if [ "$BUILD_ENV" = "production" ]; then \
    yarn install --production; \
    else \
    yarn install; \
    fi

# For production, copy .next directory if it exists
RUN if [ "$BUILD_ENV" = "production" ]; then \
    mkdir -p .next; \
    fi

# Copy all necessary source files for development
COPY --from=builder --chown=appuser:appgroup /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/app ./app
COPY --from=builder --chown=appuser:appgroup /app/components ./components
COPY --from=builder --chown=appuser:appgroup /app/lib ./lib

# Add debug commands to verify file structure
RUN ls -la /app/app/styles
RUN cat /app/app/styles/globals.css

# Ensure proper permissions
RUN chown -R appuser:appgroup /app

# Use non-root user
USER appuser

# Always expose 3001 (Next.js default port)
EXPOSE 3001

# Add these debug commands to verify the files
RUN ls -la /app
RUN ls -la /app/app
RUN ls -la /app/app/styles

# Start the server based on environment using JSON format
CMD ["sh", "-c", "if [ \"$BUILD_ENV\" = \"production\" ]; then yarn start; else yarn dev; fi"]