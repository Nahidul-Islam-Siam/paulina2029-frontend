import { connectDB } from "@/lib/connectDB";
import { z } from "zod";

const db = await connectDB();

// Schema validation
const ContactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

// POST: Store a new contact
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const contactData = ContactSchema.parse(body);

    const contactsCollection = db.collection("contacts");

    const result = await contactsCollection.insertOne({
      ...contactData,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Your message was successfully received.",
        insertedId: result.insertedId,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          status: 400,
          message: "Validation error",
          errors: error.errors,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        status: 500,
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// GET: Retrieve all contacts
export async function GET() {
  try {
    const contactsCollection = db.collection("contacts");
    const contacts = await contactsCollection.find().sort({ createdAt: -1 }).toArray();

    return new Response(
      JSON.stringify({
        status: 200,
        data: contacts,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        message: "Failed to fetch contacts",
        error: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
