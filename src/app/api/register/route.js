const { PrismaClient } = require("@prisma/client");
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { username, email, password } = body.data;
  console.log(body.data);

  if (!username || !email || !password) {
    return new NextResponse("Missing name, email, password", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: { email: email },
  });

  if (exist) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      hashedPassword,
    },
  });
  return NextResponse.json(user);
}
