import { MongoClient, ServerApiVersion } from "mongodb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let db: any;

export async function connectDB() {
  if (db) return db;

  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    if (!uri) {
      throw new Error(
        "Environment variable NEXT_PUBLIC_MONGODB_URI is not defined"
      );
    }

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    // Connect to MongoDB
    await client.connect();

    // Access the specific database
    db = client.db("Paulina");

    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Optional: Re-throw or handle the error as needed
  }
}
