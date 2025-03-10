import { NextApiRequest, NextApiResponse } from "next";
import dbPromise from "../mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await dbPromise;
    const products = await db.collection("categories").find().toArray();
   console.log("categories", products);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
