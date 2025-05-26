export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const admin = await prisma.admin.findUnique({ where: { email } });

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  }

  const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  const response = NextResponse.json({ message: "Login successful", token });

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
