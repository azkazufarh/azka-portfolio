// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // or your SMTP provider
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your email app password
    },
  });

  try {
    await transporter.sendMail({
      from: `${subject} from ${name} <${email}>`,
      to: process.env.EMAIL_USER,
      subject,
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
