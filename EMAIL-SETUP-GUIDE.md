# Setup Email untuk Form Kontak

## Yang Harus Disiapkan

### 1. Email Gmail untuk Mengirim
- **Email:** Gmail yang akan digunakan untuk mengirim email
- **App Password:** Password khusus untuk aplikasi (bukan password Gmail biasa)

### 2. Email Penerima
- **desawisatasilungkangoso@gmail.com** (email utama)

## Langkah Setup

### 1. Setup Gmail App Password

#### A. Aktifkan 2-Factor Authentication
1. Buka [Google Account Security](https://myaccount.google.com/security)
2. Klik "2-Step Verification"
3. Ikuti langkah untuk mengaktifkan 2FA

#### B. Buat App Password
1. Di [Google Account Security](https://myaccount.google.com/security)
2. Klik "App passwords"
3. Pilih "Mail" sebagai aplikasi
4. Pilih "Other" dan ketik "Website Contact Form"
5. Klik "Generate"
6. **Copy password 16 karakter** yang dihasilkan

### 2. Buat File .env.local

Buat file `.env.local` di root project dengan isi:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Contoh:**
```
EMAIL_USER=desawisatasilungkangoso@gmail.com
EMAIL_PASS=aoix vglc ggsg gzky
```

### 3. Test Email

1. **Jalankan development server:**
   ```bash
   npm run dev
   ```

2. **Buka form kontak:**
   - Buka `http://localhost:3000/kontak`
   - Isi form dengan data valid
   - Submit form

3. **Cek hasil:**
   - Form redirect ke halaman sukses
   - Email masuk ke kedua email penerima
   - Cek inbox dan spam folder

## Troubleshooting

### Email Tidak Masuk
1. **Cek .env.local** - pastikan file ada dan benar
2. **Cek App Password** - pastikan menggunakan App Password, bukan password biasa
3. **Cek 2FA** - pastikan 2-Factor Authentication aktif
4. **Restart server** - restart `npm run dev` setelah membuat .env.local

### Error "Invalid login"
- Pastikan menggunakan App Password, bukan password Gmail biasa
- Pastikan 2FA sudah aktif

### Error "Missing environment variables"
- Pastikan file `.env.local` ada di root project
- Pastikan nama variabel benar: `EMAIL_USER` dan `EMAIL_PASS`

## Keamanan

- **Jangan commit .env.local** ke git
- **Gunakan App Password** untuk keamanan
- **App Password bisa di-revoke** jika diperlukan

## Email yang Akan Dikirim

Email akan dikirim ke:
- **desawisatasilungkangoso@gmail.com** (email utama)

Dengan format:
- **Subject:** "Pesan Baru dari Website - [subjek form]"
- **From:** "Desa Wisata Silungkang Oso <your-email@gmail.com>"
- **Reply-To:** Email pengirim form
- **Content:** Data form dalam format HTML yang rapi
