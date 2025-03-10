import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || ""; // MongoDB connection string

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

const options = {};

// Ensure the MongoDB database instance is a singleton
const globalAny = globalThis as unknown as { _mongoDbPromise?: Promise<Db> };

if (!globalAny._mongoDbPromise) {
  const client = new MongoClient(uri, options);
  globalAny._mongoDbPromise = client.connect().then((client) => client.db("almostafa-e-commerce"));
}

const dbPromise: Promise<Db> = globalAny._mongoDbPromise;

export default dbPromise;
