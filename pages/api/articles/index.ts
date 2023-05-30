import { getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { authOptions } from "../auth/[...nextauth]";

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
    let session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (session) {
      req.body.author = session.user;
    }
    console.log(req.body);
    // const result = await db.collection("post").insertOne(req.body);
    // res.status(200).redirect("/list");
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
