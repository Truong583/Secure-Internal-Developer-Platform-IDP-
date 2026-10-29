
#!/usr/bin/env bash

cd "$(dirname "$0")" || exit 1

echo "===== 1. USER HIEN TAI ====="
whoami

echo "===== 2. HOSTNAME ====="
hostname

echo "===== 3. THOI GIAN HE THONG ====="
date

echo "===== 4. DOCKER CONTAINERS ====="
docker container ps

echo "===== 5. LOG BACKEND MOI NHAT ====="
docker compose logs --tail=20 backend

echo "===== 6. PORT DANG LANG NGHE ====="
ss -tuln | grep LISTEN

echo "===== 7. APP HEALTH CHECK ====="
curl -i --max-time 5 http://localhost:8000/api/health

echo ""
echo "===== HEALTH CHECK HOAN TAT ====="
