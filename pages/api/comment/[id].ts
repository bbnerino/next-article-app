import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await connectDB).db("forum");
  const id = req.query.id as string;
  
  if (req.method === "GET" && id) {
    const result = await db
      .collection("comment")
      .find({ parent: new ObjectId(id) })
      .toArray();
    return res.status(200).json(result);
  }
}
