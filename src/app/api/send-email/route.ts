import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Ensure this route runs on the Node.js runtime so server env vars are available
export const runtime = 'nodejs';
// Avoid any static optimization that could interfere with runtime env resolution
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, visitors, visitDate, subject } = body;

    // Validate required fields
    if (!name || !phone || !email || !subject) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    console.log('🔍 Debug Environment Variables in API:');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'SET' : 'NOT SET');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET' : 'NOT SET');

    // Fallback values (for local dev) if env is not loaded; App Password must not contain spaces
    // NOTE: Google shows the app password with spaces for readability; remove spaces when using programmatically
    const fallbackEmailUser = 'fauzanazhima270102@gmail.com';
    const fallbackEmailPass = 'gywwkewabyxmwuzn';

    const emailUser = (process.env.EMAIL_USER || fallbackEmailUser).trim();
    const emailPass = (process.env.EMAIL_PASS || fallbackEmailPass).replace(/\s+/g, '').trim();

    if (!emailUser || !emailPass) {
      console.error('Missing email environment variables');
      return NextResponse.json(
        { 
          error: 'Email service configuration error. Please check your email credentials.',
          details: 'Missing environment variables: EMAIL_USER or EMAIL_PASS'
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Skip verification and send email directly
    console.log('📤 Preparing to send email...');

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #102467; border-bottom: 2px solid #ffd704; padding-bottom: 10px;">
          Pesan Baru dari Website Desa Wisata Silungkang Oso
        </h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Nama:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Telepon:</strong> ${phone}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Jumlah Pengunjung:</strong> ${visitors || 'Tidak diisi'}</p>
          <p style="margin: 10px 0;"><strong>Tanggal Kunjungan:</strong> ${visitDate || 'Tidak diisi'}</p>
          <p style="margin: 10px 0;"><strong>Subjek:</strong> ${subject}</p>
          <p style="margin: 10px 0;"><strong>Tanggal Kirim:</strong> ${new Date().toLocaleString('id-ID')}</p>
        </div>
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          Email ini dikirim otomatis dari form kontak website Desa Wisata Silungkang Oso.
        </p>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"Desa Wisata Silungkang Oso" <${emailUser}>`,
      to: 'fauzanazhima270102@gmail.com',
      subject: `Pesan Baru dari Website - ${subject}`,
      html: emailContent,
      replyTo: email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check email credentials.';
      } else if (error.message.includes('Connection timeout')) {
        errorMessage = 'Email service connection timeout. Please try again later.';
      } else if (error.message.includes('Invalid recipient')) {
        errorMessage = 'Invalid recipient email address.';
      } else {
        errorMessage = `Email error: ${error.message}`;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
