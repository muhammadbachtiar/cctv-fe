# Docker Compose Deployment Guide

Aplikasi CCTV Monitoring System mendukung 2 mode deployment:

## 1. Development Mode (Tanpa Reverse Proxy)
Mode ini cocok untuk development, testing lokal, atau deployment sederhana.

### Cara menjalankan:
```bash
# Build dan jalankan
docker-compose up -d

# Atau untuk rebuild
docker-compose up -d --build

# Lihat logs
docker-compose logs -f

# Stop
docker-compose down
```

### Akses:
- Aplikasi: `http://localhost:3000`

---

## 2. Production Mode (Dengan Reverse Proxy Nginx)
Mode ini cocok untuk production dengan domain `cctv.muaraenimkab.go.id` dan SSL support.

### Persiapan SSL Certificate (jika menggunakan HTTPS):

1. Letakkan SSL certificate di folder `nginx/ssl/`:
   ```bash
   nginx/ssl/certificate.crt
   nginx/ssl/private.key
   ```

2. Jika TIDAK memiliki SSL certificate, gunakan konfigurasi HTTP-only:
   ```bash
   # Hapus atau rename file cctv.conf
   mv nginx/conf.d/cctv.conf nginx/conf.d/cctv.conf.backup
   
   # Gunakan konfigurasi HTTP-only
   cp nginx/conf.d/cctv-http.conf.example nginx/conf.d/cctv.conf
   ```

### Cara menjalankan:
```bash
# Build dan jalankan dengan reverse proxy
docker-compose -f docker-compose.prod.yml up -d

# Atau untuk rebuild
docker-compose -f docker-compose.prod.yml up -d --build

# Lihat logs
docker-compose -f docker-compose.prod.yml logs -f

# Lihat logs spesifik service
docker-compose -f docker-compose.prod.yml logs -f nginx
docker-compose -f docker-compose.prod.yml logs -f cctv-frontend

# Stop
docker-compose -f docker-compose.prod.yml down
```

### Akses:
- HTTP: `http://cctv.muaraenimkab.go.id` (akan redirect ke HTTPS jika SSL enabled)
- HTTPS: `https://cctv.muaraenimkab.go.id` (jika SSL configured)

---

## Environment Variables

Pastikan file `.env.local` sudah dibuat dengan konfigurasi yang sesuai:
```env
NEXT_PUBLIC_CCTV_DOMAIN=http://103.147.245.162
```

---

## Troubleshooting

### 1. Port sudah digunakan
```bash
# Check port yang digunakan
netstat -ano | findstr :3000
netstat -ano | findstr :80

# Stop container yang berjalan
docker-compose down
docker-compose -f docker-compose.prod.yml down
```

### 2. SSL Certificate error
- Pastikan path certificate di `nginx/conf.d/cctv.conf` sudah benar
- Atau gunakan HTTP-only configuration

### 3. Nginx tidak bisa connect ke frontend
```bash
# Check network
docker network ls
docker network inspect cctv-fe_cctv-network

# Restart services
docker-compose -f docker-compose.prod.yml restart
```

### 4. Check health status
```bash
docker ps
# Lihat kolom STATUS, harusnya "healthy"
```

---

## Update Deployment

Jika ada perubahan code:
```bash
# Development mode
docker-compose down
docker-compose up -d --build

# Production mode
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --build
```

---

## Monitoring

```bash
# Check logs
docker-compose -f docker-compose.prod.yml logs -f

# Check container status
docker-compose -f docker-compose.prod.yml ps

# Check nginx logs
docker-compose -f docker-compose.prod.yml exec nginx tail -f /var/log/nginx/cctv_access.log
docker-compose -f docker-compose.prod.yml exec nginx tail -f /var/log/nginx/cctv_error.log
```
