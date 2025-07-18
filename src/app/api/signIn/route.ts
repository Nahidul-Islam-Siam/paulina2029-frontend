import { connectDB } from "@/lib/connectDB";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const admin = await request.json();

  try {
    const db = await connectDB();
    const adminCollection = db.collection("admin");

    const user = await adminCollection.findOne({ email: admin.email });

    if (!user) {
      return Response.json({
        status: 401,
        message: "Invalid Credential",
      });
    }

    const isPasswordMatch = await bcrypt.compare(admin.password, user.password);

    if (!isPasswordMatch) {
      return Response.json({
        status: 401,
        message: "Invalid Credential",
      });
    }

    const token = jwt.sign(
      { email: user.email },
      `${process.env.NEXT_PUBLIC_AUTH_SECRET}`,
      {
        expiresIn: "1h",
      }
    );

    return Response.json({
      status: 200,
      message: "Login successful",
      token: token,
      data: user,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: error,
    });
  }
}
