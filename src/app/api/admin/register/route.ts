// app/api/admin/register/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const existingAdmin = await prisma.admin.findUnique({ where: { email } });

  if (existingAdmin) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = await prisma.admin.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    { message: "Admin registered", adminId: newAdmin.id },
    { status: 201 }
  );
}
