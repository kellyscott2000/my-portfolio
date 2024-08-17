import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstname, lastname, email, phone, service, message } =
    await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "victoryolamide4@gmail.com",
      subject: `Message from ${firstname} ${lastname}`,
      text: `Message: ${message}\n\nContact Info:\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error); // Log full error details
    return NextResponse.json(
      { error: "Error sending message", details: error.message },
      { status: 500 }
    );
  }
}
