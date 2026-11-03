# ==========================================
# GIAI ĐOẠN 1: Cài đặt dependencies (deps)
# ==========================================
FROM node:24-alpine AS deps
WORKDIR /app

# Chỉ copy file mô tả thư viện để tận dụng Docker Cache layer
COPY package.json package-lock.json ./
RUN npm ci

# ==========================================
# GIAI ĐOẠN 2: Build ứng dụng (builder)
# ==========================================
FROM node:24-alpine AS builder
WORKDIR /app

# Lấy node_modules đã cài từ stage deps sang stage builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Tắt gửi dữ liệu telemetry ẩn danh của Next.js trong quá trình build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ==========================================
# GIAI ĐOẠN 3: Chạy ứng dụng Production (runner)
# ==========================================
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# DevSecOps: Tạo user 'nextjs' không đặc quyền (tránh chạy bằng root)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Chỉ copy đúng sản phẩm build gọn nhẹ (standalone)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Chạy server siêu nhẹ bằng node thuần (không cần npm start)
CMD ["node", "server.js"]