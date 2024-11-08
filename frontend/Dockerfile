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
FROM node:20-alpine${BUILD_ENV:+"-slim"} AS runner

ARG BUILD_ENV=production
WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy package files and configs for both environments
COPY --from=builder --chown=appuser:appgroup /app/package.json ./
COPY --from=builder --chown=appuser:appgroup /app/yarn.lock ./
COPY --from=builder --chown=appuser:appgroup /app/tsconfig.json ./
COPY --from=builder --chown=appuser:appgroup /app/tailwind.config.ts ./
COPY --from=builder --chown=appuser:appgroup /app/postcss.config.mjs ./

# Copy essential directories for both environments
COPY --from=builder --chown=appuser:appgroup /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/app ./app
COPY --from=builder --chown=appuser:appgroup /app/components ./components
COPY --from=builder --chown=appuser:appgroup /app/lib ./lib

# Install dependencies based on environment
RUN if [ "$BUILD_ENV" = "production" ]; then \
    yarn install && \
    yarn add -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer && \
    mkdir -p .next/static; \
    else \
    yarn install; \
    fi

# Copy production build files if in production mode
COPY --from=builder --chown=appuser:appgroup /app/.next/standalone/. ./
COPY --from=builder --chown=appuser:appgroup /app/.next/static ./.next/static

# Ensure proper permissions
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3001

# Environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Start the server based on environment
CMD ["sh", "-c", "if [ \"$BUILD_ENV\" = \"production\" ]; then node server.js; else yarn dev; fi"]