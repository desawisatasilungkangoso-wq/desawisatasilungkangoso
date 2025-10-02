# 🔧 Setup .env.local File

## ❌ **ERROR YANG TERJADI:**
```
"Terjadi kesalahan: Email service not configured. Please contact administrator."
```

## ✅ **SOLUSI:**

### 1. **Buat File `.env.local`**

Buat file baru bernama `.env.local` di **root directory** project Anda (sama level dengan `package.json`).

### 2. **Isi File `.env.local`**

Copy dan paste kode berikut ke dalam file `.env.local`:

```env
# Email Configuration
EMAIL_USER=fauzanazhima270102@gmail.com
EMAIL_PASS=your-app-password-here

# Instructions:
# 1. Replace 'your-app-password-here' with your Gmail App Password
# 2. Make sure you have enabled 2-Factor Authentication in Gmail
# 3. Generate App Password from: https://myaccount.google.com/apppasswords
# 4. App Password should be 16 characters long (no spaces)
```

### 3. **Ganti App Password**

**PENTING:** Ganti `your-app-password-here` dengan App Password Gmail Anda yang sebenarnya.

**Contoh:**
```env
EMAIL_USER=fauzanazhima270102@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 4. **Cara Mendapatkan App Password:**

1. **Login ke Gmail** `fauzanazhima270102@gmail.com`
2. **Buka:** https://myaccount.google.com/apppasswords
3. **Pilih:** "Mail" dan "Other (Custom name)"
4. **Masukkan nama:** "Website Form"
5. **Copy App Password** yang dihasilkan (16 karakter)
6. **Paste ke `.env.local`** menggantikan `your-app-password-here`

### 5. **Test Konfigurasi**

Setelah file `.env.local` dibuat, test dengan:

```bash
npm run test-email
```

**Harapan:**
- ✅ "Test email sent successfully!"
- ✅ Email masuk ke `fauzanazhima270102@gmail.com`

### 6. **Test Form Website**

```bash
npm run dev
# Buka http://localhost:3000/kontak
```

## 🚨 **Jika Masih Error:**

1. **Pastikan file `.env.local` ada** di root directory
2. **Pastikan tidak ada spasi** di awal/akhir baris
3. **Pastikan App Password benar** (16 karakter)
4. **Restart server** setelah membuat `.env.local`

## 📁 **Struktur File yang Benar:**

```
wisata-glowup/
├── .env.local          ← File ini harus ada!
├── package.json
├── src/
├── public/
└── ...
```

**File `.env.local` harus ada di level yang sama dengan `package.json`!**
