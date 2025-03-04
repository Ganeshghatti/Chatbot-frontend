import { transporter } from '@/utils/transporter';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const mailOptions = {
    from: email,
    to: 'info@thesquirrel.site',
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}