import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const admin = await request.json();

  try {
    const db = await connectDB();
    const adminCollection = db.collection("admin");

    const isExist = await adminCollection.findOne({ email: admin.email });

    if (isExist) {
      return Response.json({
        status: 400,
        message: "Admin already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(admin.password, 10);

    const newAdmin = {
      email: admin.email,
      name: admin.name,
      password: hashedPassword,
    };

    const result = await adminCollection.insertOne(newAdmin);

    return Response.json({
      status: 201,
      message: "Admin created",
      data: result,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: error,
    });
  }
}
