#!/usr/bin/env bash
# ==============================================================================
# Script: deploy-basic.sh
# Mục đích: Tự động hóa quy trình deploy ứng dụng Docker Compose trên Ubuntu VPS
# Tác giả: Phạm Đình Trường - Secure IDP Platform
# File nộp: deploy-basic.sh
# ==============================================================================

set -e # Dừng ngay script nếu có bất kỳ lệnh nào bị lỗi

echo "=========================================================="
echo ">>> [1/6] THÔNG TIN NGƯỜI THỰC HIỆN VÀ MÁY CHỦ"
echo "=========================================================="
echo "Current User : $(whoami)"
echo "Hostname     : $(hostname)"
echo "System Date  : $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

echo "=========================================================="
echo ">>> [2/6] DI CHUYỂN VÀO THƯ MỤC DỰ ÁN"
echo "=========================================================="
PROJECT_DIR="/root/PhamDinhTruong-CICD/Secure-Internal-Developer-Platform-IDP-"

if [ -d "$PROJECT_DIR" ]; then
    cd "$PROJECT_DIR"
else
    echo "[!] Đường dẫn $PROJECT_DIR không tồn tại, sử dụng thư mục hiện tại: $(pwd)"
fi
echo "Thư mục hiện tại: $(pwd)"
echo ""

echo "=========================================================="
echo ">>> [3/6] BUILD LẠI HỆ THỐNG DOCKER"
echo "=========================================================="
echo "[+] Đang build lại Docker image cho toàn bộ services..."
docker compose build
echo "[OK] Build image thành công!"
echo ""

echo "=========================================================="
echo ">>> [4/6] CHẠY LẠI HỆ THỐNG BẰNG DOCKER COMPOSE"
echo "=========================================================="
echo "[+] Đang khởi chạy stack dịch vụ (detached mode)..."
docker compose up -d --remove-orphans
echo "[OK] Stack đã được áp dụng thành công!"
echo ""

echo "=========================================================="
echo ">>> [5/6] HIỂN THỊ TRẠNG THÁI CONTAINERS"
echo "=========================================================="
docker compose ps
echo ""

echo "=========================================================="
echo ">>> [6/6] IN LOG 30-50 DÒNG GẦN NHẤT CỦA APP (BACKEND)"
echo "=========================================================="
echo "--- [BACKEND LOGS - LAST 40 LINES] ---"
docker compose logs --tail=40 backend || true
echo ""

echo "=========================================================="
echo ">>> HOÀN TẤT QUY TRÌNH DEPLOY CƠ BẢN THÀNH CÔNG!"
echo "=========================================================="

