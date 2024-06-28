import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullname, email, salutations, emailContent, attachment } = body;
    const data = await resend.emails.send({
      from: 'website@semperavanti.org',
      to: [`${email}`],
      subject: [`${salutations} ${fullname}`],
      html: emailContent,
      attachments: attachment,
    });

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
