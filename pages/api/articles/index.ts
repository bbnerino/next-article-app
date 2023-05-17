import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await connectDB).db("forum");

  if (req.method === "GET") {
    const list = await getList(db);
    return res.status(200).json(list);
  }
  if (req.method === "POST") {
    const { title, content } = req.body;
    if (title === "" || content === "") {
      return res.status(400).json({ message: "Invalid title or content" });
    }
    const result = await db.collection("post").insertOne({
      title,
      content,
    });
    return res.status(200).redirect("/list");
  }
}

const getList = async (db: any) => {
  const list: {
    title: string;
    content: string;
    _id: string;
  }[] = await db.collection("post").find().toArray();

  return list || [];
};
