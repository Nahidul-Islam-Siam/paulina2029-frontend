// Route: /api/reviews/[published]
import { connectDB } from "@/lib/connectDB";

export async function GET(request: Request) {
  try {
    const db = await connectDB();
    const collection = db.collection("reviews");

    // Get the 'status' query param
    const url = new URL(request.url);
    const status = url.searchParams.get("status");

    const filter = status ? { status } : {}; // if status=published, apply it

    const res = await collection.find(filter).toArray();

    return Response.json({
      status: 200,
      data: res,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Failed to fetch feedbacks",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}