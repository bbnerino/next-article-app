import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import bcrypt from "bcrypt";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let hash = await bcrypt.hash(req.body.password, 10);
    console.log(req.body);
    console.log(hash);
    let db = (await connectDB).db("forum");
    const result = await db.collection("uesr_cred").insertOne(req.body);
    res.status(200).json("가입성공");
  }
}
