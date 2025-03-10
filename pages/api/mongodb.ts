import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || ""; // MongoDB connection string

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

declare global {
  namespace NodeJS {
      interface Global {
        _mongoDbPromise?: Promise<Db>;
      }
    }
  
    var _mongoDbPromise: Promise<Db>;
  }

const options = {};

let client: MongoClient;
let dbPromise: Promise<Db>;

// Ensure the MongoDB database instance is a singleton
if (!globalThis._mongoDbPromise) {
  client = new MongoClient(uri, options);
  globalThis._mongoDbPromise = client.connect().then((client) => client.db("almostafa-e-commerce"));
}

dbPromise = globalThis._mongoDbPromise;

export default dbPromise;
