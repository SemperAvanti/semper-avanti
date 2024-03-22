import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();
// tymczasowo api key jest 'na sztywno'
const resend = new Resend('re_fwDZFKuW_PrHLRii7SEQAH4UzCmZf3NNG');
// const resend = new Resend(process.env.EMAIL_API_KEY);
export async function POST(req) {
  try {
    const body = await req.json();
    const { fullname, email } = body;
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Congrats ${fullname}!!`,
      html: `<p>Congrats ${fullname} you just recived an email!</p>
                <a href="https://drive.google.com/file/d/1tpTqAmvVl0XNamKNzJEvs6dqTrPJQdkG/view?usp=sharing">LINK</a>`,
    });

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
