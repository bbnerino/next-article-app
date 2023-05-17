import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;

  const db = (await connectDB).db("forum");

  if (req.method === "GET") {
    if (typeof id === "string") {
      const item = await db
        .collection("post")
        .findOne({ _id: new ObjectId(id) });
      return res.status(200).json(item);
    }
  }
  if (req.method === "POST") {
    if (typeof id === "string") {
      await db.collection("post").updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
          },
        }
      );
      res.status(200).redirect("/list");
    }
  }
  if (req.method === "DELETE") {
    if (typeof id === "string") {
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 0) {
        return res.status(404).json("Not Found");
      }
      return res.status(200).end();
    }
  }

  return res.status(404).end();
}
