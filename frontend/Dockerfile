# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first to leverage cache
COPY package*.json ./
COPY yarn.lock ./

# Install all dependencies
RUN yarn install --frozen-lockfile

# Copy source files
COPY . .

# Build the application (only for production)
ARG BUILD_ENV=production
RUN if [ "$BUILD_ENV" = "production" ]; then yarn build; fi

# Production stage
FROM node:20-alpine AS runner

ARG BUILD_ENV=production
WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy package files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

# Install dependencies based on environment
RUN if [ "$BUILD_ENV" = "production" ]; then \
    yarn install --production --frozen-lockfile; \
    else \
    yarn install --frozen-lockfile; \
    fi

# For production, copy only necessary files
RUN if [ "$BUILD_ENV" = "production" ]; then \
    mkdir -p .next; \
    fi

# Copy production build files if in production
COPY --from=builder --chown=appuser:appgroup /app/.next ./.next

# Copy source files needed for both dev and prod
COPY --from=builder --chown=appuser:appgroup /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/app ./app
COPY --from=builder --chown=appuser:appgroup /app/components ./components
COPY --from=builder --chown=appuser:appgroup /app/lib ./lib
COPY --from=builder --chown=appuser:appgroup /app/tsconfig.json ./
COPY --from=builder --chown=appuser:appgroup /app/tailwind.config.ts ./
COPY --from=builder --chown=appuser:appgroup /app/postcss.config.mjs ./

# Ensure proper permissions
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3001

# Start the server based on environment
CMD ["sh", "-c", "if [ \"$BUILD_ENV\" = \"production\" ]; then yarn start; else yarn dev; fi"]