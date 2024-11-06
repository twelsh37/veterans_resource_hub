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

# Install dependencies based on environment
RUN if [ "$BUILD_ENV" = "production" ]; then \
    yarn install --production; \
    else \
    yarn install; \
    fi

# For production, copy the built .next directory
RUN if [ "$BUILD_ENV" = "production" ]; then \
    mkdir -p .next; \
    fi

# Copy all necessary source files for development
COPY --from=builder --chown=appuser:appgroup /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/app ./app
COPY --from=builder --chown=appuser:appgroup /app/components ./components
COPY --from=builder --chown=appuser:appgroup /app/lib ./lib

# Only copy .next directory for production
RUN if [ "$BUILD_ENV" = "production" ]; then \
    COPY --from=builder --chown=appuser:appgroup /app/.next ./.next; \
    fi

# Ensure proper permissions
RUN chown -R appuser:appgroup /app

# Use non-root user
USER appuser

# Define environment variables but don't set values
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
ENV CLERK_SECRET_KEY=""
ENV VA_FORMS_API_KEY=""

# Always expose 3001 (Next.js default port)
EXPOSE 3001

# Add this before the CMD to debug
RUN ls -la /app
RUN ls -la /app/app

# Start the server based on environment
CMD if [ "$BUILD_ENV" = "production" ]; then \
    yarn start; \
    else \
    yarn dev; \
    fi