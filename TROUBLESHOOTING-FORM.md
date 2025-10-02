# Troubleshooting Form Kontak

## Debugging Steps

### 1. Buka Developer Tools
1. Tekan `F12` atau klik kanan → "Inspect"
2. Buka tab **Console**
3. Isi form dan submit
4. Lihat pesan error di console

### 2. Cek Network Tab
1. Buka tab **Network** di Developer Tools
2. Submit form
3. Lihat request ke `formspree.io`
4. Periksa status code dan response

### 3. Common Issues & Solutions

#### Error: "Terjadi kesalahan saat mengirim pesan"
**Kemungkinan penyebab:**
- Formspree endpoint salah
- Field required tidak diisi
- Network error

**Solusi:**
1. Periksa endpoint di console: `https://formspree.io/f/xkgqbjjk`
2. Pastikan semua field wajib diisi
3. Cek koneksi internet

#### Error: "Terjadi kesalahan koneksi"
**Kemungkinan penyebab:**
- Internet tidak stabil
- Formspree server down
- CORS error

**Solusi:**
1. Cek koneksi internet
2. Coba lagi dalam beberapa menit
3. Periksa status Formspree

#### Form tidak redirect ke halaman sukses
**Kemungkinan penyebab:**
- JavaScript error
- Response tidak OK
- Path halaman sukses salah

**Solusi:**
1. Periksa console untuk error
2. Pastikan response status 200
3. Cek apakah file `/kontak/sukses/page.tsx` ada

### 4. Testing Steps

1. **Buka form kontak:** `http://localhost:3000/kontak`
2. **Isi form dengan data valid:**
   ```
   Nama: Test User
   Telepon: 081234567890
   Email: test@example.com
   Subjek: Test Message
   ```
3. **Submit form**
4. **Periksa console** untuk log messages
5. **Cek email** di `fauzanazhima270102@gmail.com`

### 5. Console Messages yang Diharapkan

**Jika berhasil:**
```
Mengirim form ke Formspree...
Response status: 200
Form berhasil dikirim
```

**Jika error:**
```
Mengirim form ke Formspree...
Response status: 400
Formspree error response: [error details]
```

### 6. Formspree Dashboard

1. Buka [formspree.io](https://formspree.io)
2. Login ke akun Anda
3. Cek form dengan endpoint `xkgqbjjk`
4. Lihat submissions yang masuk
5. Periksa email settings

### 7. Alternative Solution

Jika masih bermasalah, coba gunakan form HTML murni:

```html
<form action="https://formspree.io/f/xkgqbjjk" method="POST">
  <!-- form fields -->
  <input type="hidden" name="_next" value="http://localhost:3000/kontak/sukses">
  <button type="submit">Kirim</button>
</form>
```
