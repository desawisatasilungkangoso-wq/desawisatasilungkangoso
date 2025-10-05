// Test script untuk memastikan email berfungsi
// Jalankan dengan: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🧪 Testing Email Configuration...\n');

  // Debug environment variables
  console.log('🔍 Debug Environment Variables:');
  console.log(`EMAIL_USER: ${process.env.EMAIL_USER || 'NOT SET'}`);
  console.log(`EMAIL_PASS: ${process.env.EMAIL_PASS ? 'SET (hidden)' : 'NOT SET'}`);
  console.log('');

  // Check environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Environment variables not found!');
    console.log('Please check your .env.local file:');
    console.log('EMAIL_USER=your-email@gmail.com');
    console.log('EMAIL_PASS=your-app-password');
    console.log('');
    console.log('Current .env.local content:');
    try {
      const fs = require('fs');
      const content = fs.readFileSync('.env.local', 'utf8');
      console.log(content);
    } catch (error) {
      console.log('Could not read .env.local file');
    }
    return;
  }

  console.log('✅ Environment variables found');
  console.log(`📧 Email User: ${process.env.EMAIL_USER}`);
  console.log(`🔑 Email Pass: ${process.env.EMAIL_PASS.substring(0, 4)}****\n`);

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // Skip verification and try to send email directly
    console.log('🔍 Testing email sending...');

    // Send test email
    console.log('📤 Sending test email...');
    const mailOptions = {
      from: `"Desa Wisata Silungkang Oso" <${process.env.EMAIL_USER}>`,
      to: 'desawisatasilungkangoso@gmail.com',
      subject: 'Test Email - Form Kontak Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #102467; border-bottom: 2px solid #ffd704; padding-bottom: 10px;">
            Test Email - Form Kontak Website
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nama:</strong> Test User</p>
            <p><strong>Email:</strong> test@example.com</p>
            <p><strong>Telepon:</strong> 081234567890</p>
            <p><strong>Subjek:</strong> Test Email</p>
            <p><strong>Tanggal:</strong> ${new Date().toLocaleString('id-ID')}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            ✅ Email configuration berhasil! Form kontak website siap digunakan.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log(`📧 Message ID: ${info.messageId}`);
    console.log('\n🎉 Email system is working correctly!');
    console.log('📬 Check your email inbox for the test message.');

  } catch (error) {
    console.error('❌ Error testing email:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.log('\n💡 Solution:');
      console.log('1. Make sure you are using App Password, not regular Gmail password');
      console.log('2. Enable 2-Factor Authentication in Gmail');
      console.log('3. Generate new App Password in Google Account Settings');
    } else if (error.message.includes('Connection timeout')) {
      console.log('\n💡 Solution:');
      console.log('1. Check your internet connection');
      console.log('2. Try again in a few minutes');
    }
  }
}

testEmail();
