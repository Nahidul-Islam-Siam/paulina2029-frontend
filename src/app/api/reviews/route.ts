/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { z } from "zod";

const db = await connectDB();

const FeedbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  status: z.enum(["published", "unpublished"], {
    required_error: "Status is required",
    invalid_type_error: "Status must be either 'published' or 'unpublished'",
  }),
  title: z.string().min(1, "Title is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
  rating: z.number().min(1).max(5).optional(), // optional field
});

export const GET = async () => {
  try {
    // const db = await connectDB();
    const feedBackCollections = await db.collection("reviews");
    const res = await feedBackCollections.find().toArray();
    if (res) {
      const avg_rating = parseFloat(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (
          res.reduce((acc: any, data: any) => acc + data.rating, 0) / res.length
        ).toFixed(2)
      );
      return Response.json({
        status: 200,
        data: res,
        length: res?.length,
        avg_rating: avg_rating,
      });
    }
    return Response.json({
      status: 404,
      message: "No data Found",
    });
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
};


// demo 
// {
//   "name": "John Doe 2",
//     "title": "John Doe",
//   "email": "john@example.com",
//   "message": "Great service!",
//   "rating": 5,
//   "status": "unpublished"
// }


export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 2. Validate the input data
    const feedbacks = FeedbackSchema.parse(body);

    // 3. Connect to DB and insert data
    // const db = await connectDB();
    const feedBackCollections = db.collection("reviews");
    const res = await feedBackCollections.insertOne(feedbacks);

    return Response.json({
      status: 200,
      data: res,
    });
  } catch (error) {
    // 4. Handle validation or DB errors
    if (error instanceof z.ZodError) {
      return Response.json({
        status: 400,
        message: "Validation error",
        errors: error.errors,
      });
    }

    return Response.json({
      status: 500,
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
}


// send in body
// {
//   "id": "682fb7ee71f0b0c2bdf8affe"
// }
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json(); // Assuming the ID is provided in the JSON body
    // console.log(id);
    if (!id) {
      return new Response(
        JSON.stringify({ status: 400, message: "ID is required for deletion" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // const db = await connectDB();
    const feedBackCollections = db.collection("reviews");

    // Delete document by ID
    const res = await feedBackCollections.deleteOne({ _id: new ObjectId(id) });

    if (res.deletedCount > 0) {
      return new Response(
        JSON.stringify({
          status: 200,
          message: "Feedback deleted successfully",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ status: 404, message: "Feedback not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
}


// send in body
// {
//   "id": "682fb7ee71f0b0c2bdf8affe"
// }

export async function PATCH(request: Request) {
  try {
    const { id } = await request.json(); // Assume the ID is provided in the JSON body
    // console.log(id);

    if (!id) {
      return new Response(
        JSON.stringify({
          status: 400,
          message: "ID is required for updating status",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // const db = await connectDB();
    const feedBackCollections = db.collection("reviews");

    // Find the document by ID
    const feedback = await feedBackCollections.findOne({
      _id: new ObjectId(id),
    });

    if (!feedback) {
      return new Response(
        JSON.stringify({ status: 404, message: "Feedback not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Determine new status based on current status
    const newStatus =
      feedback.status === "published" ? "unpublished" : "published";

    // Update the document with the new status
    const res = await feedBackCollections.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: newStatus } }
    );

    if (res.modifiedCount > 0) {
      return new Response(
        JSON.stringify({
          status: 200,
          message: `Feedback ${newStatus}.`,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ status: 500, message: "Failed to update status" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
}