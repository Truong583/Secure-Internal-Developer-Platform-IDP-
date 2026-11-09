# HƯỚNG DẪN CHI TIẾT CHỤP ẢNH & LÀM BẰNG CHỨNG NỘP BÀI (BUỔI 16)
**Dự án:** Secure Internal Developer Platform (IDP)  
**Tác giả:** Phạm Đình Trường  
**Thư mục lưu trữ:** `Secure-Internal-Developer-Platform-IDP-/bao-cao-buoi16/`

---

## DANH MỤC CÁC FILE ĐÃ HOÀN THIỆN TRONG THƯ MỤC NÀY

| Tên File | Tương ứng bài | Trạng thái |
| :--- | :--- | :--- |
| `bai1-nginx-config.conf` | Bài 1: Cấu hình Nginx Virtual Host Subdomain | ✅ Sẵn sàng |
| `bai2-cloudflare-summary.txt` | Bài 2: Tóm tắt vai trò Cloudflare & rủi ro lộ IP | ✅ Sẵn sàng |
| `bai3-port-audit.txt` | Bài 3: Rà soát cổng mạng, phân loại port rủi ro | ✅ Sẵn sàng |
| `bai4-subdomain-architecture.txt` | Bài 4: Mô tả kỹ thuật & sơ đồ hệ thống đa Subdomain | ✅ Sẵn sàng |
| `deploy-checklist-buoi16.txt` | Bài 5: Checklist quy trình deploy thủ công | ✅ Sẵn sàng |
| `deploy-basic.sh` | Bài 6: Shell script deploy tự động hóa Docker | ✅ Sẵn sàng |
| `post-deploy-verify.txt` | Bài 7: Checklist và lệnh verify sau deploy | ✅ Sẵn sàng |
| `bai8-pipeline-diagram.txt` | Bài 8: Sơ đồ toàn cảnh pipeline từ code đến user | ✅ Sẵn sàng |
| `tong-hop.txt` | Bài 9: Báo cáo tổng hợp lớn 5 phần & sơ đồ hệ thống | ✅ Sẵn sàng |

---

## HƯỚNG DẪN CÁC LỆNH CẦN GÕ TRÊN VPS ĐỂ CHỤP ẢNH

### 1. BẰNG CHỨNG BÀI 1 (Domain / Subdomain Logic)
Chạy lần lượt trên VPS và chụp ảnh màn hình Terminal:
```bash
# Ảnh 1: Xem file cấu hình Nginx
cat /etc/nginx/sites-available/truongtest.id.vn

# Ảnh 2: Xem trạng thái containers đang chạy
docker compose ps

# Ảnh 3: Test curl độc lập từng subdomain (Chụp rõ dòng HTTP 200 OK)
curl -I -H "Host: truongtest.id.vn" http://127.0.0.1/
curl -i -H "Host: api.truongtest.id.vn" http://127.0.0.1/api/health
curl -I -H "Host: admin.truongtest.id.vn" http://127.0.0.1/
```

---

### 2. BẰNG CHỨNG BÀI 2 (Vai trò Cloudflare)
* Mở và nộp file: `bai2-cloudflare-summary.txt`
* Ảnh sơ đồ: Dùng sơ đồ trong file `bai2-cloudflare-summary.txt` hoặc ảnh chụp sơ đồ Mermaid.

---

### 3. BẰNG CHỨNG BÀI 3 (Kiểm tra Port Server)
Chạy trên VPS và chụp ảnh:
```bash
# Ảnh 1: Kiểm tra các cổng đang lắng nghe
ss -tuln

# Ảnh 2: Kiểm tra container và port mapping
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Ảnh 3: Kiểm tra tiến trình Nginx
ss -tulnp | grep nginx
```
* Kết luận nộp kèm có sẵn trong file `bai3-port-audit.txt`.

---

### 4. BẰNG CHỨNG BÀI 4 (Mô hình nhiều Subdomain)
* Nộp file: `bai4-subdomain-architecture.txt` (Đã có sơ đồ ASCII và 12 dòng mô tả kỹ thuật chuẩn chỉnh).

---

### 5. BẰNG CHỨNG BÀI 5 (Checklist Deploy)
* Nộp file: `deploy-checklist-buoi16.txt` (Đầy đủ 7 bước chi tiết từng lệnh).

---

### 6. BẰNG CHỨNG BÀI 6 (Script Deploy Cơ Bản)
Chạy trên VPS và chụp ảnh:
```bash
# Ảnh 1: Cấp quyền thực thi và xem nội dung script
chmod +x deploy-basic.sh
ls -la deploy-basic.sh

# Ảnh 2: Chạy script deploy (Chụp màn hình lúc script in thông tin user, build và log)
./deploy-basic.sh
```

---

### 7. BẰNG CHỨNG BÀI 7 (Verify Sau Deploy)
Chạy trên VPS và chụp ảnh:
```bash
# Ảnh 1: Kiểm tra docker ps & log
docker compose ps
docker compose logs --tail=20 backend

# Ảnh 2: Kiểm tra cổng lắng nghe an toàn
ss -tuln | grep -E ':(80|3000|8000|5432)\b'

# Ảnh 3: Kiểm tra curl API và Web
curl -i http://127.0.0.1:8000/api/health
curl -I -H "Host: truongtest.id.vn" http://127.0.0.1/
curl -I -H "Host: admin.truongtest.id.vn" http://127.0.0.1/
```
* Nộp kèm file: `post-deploy-verify.txt`.

---

### 8. BẰNG CHỨNG BÀI 8 (Sơ đồ Pipeline)
* Nộp file: `bai8-pipeline-diagram.txt`.

---

### 9. BẰNG CHỨNG BÀI 9 (Báo cáo Tổng hợp lớn)
* Nộp file: `tong-hop.txt` (Bài quan trọng nhất, gồm đủ 5 phần và sơ đồ tổng hợp).

