import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
    let data = JSON.parse(req.body);
    let session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (session != null) {
      if (session.user) {
        let saveData = {
          content: data.content,
          parent: new ObjectId(data.id),
          author: session.user.email,
        };
        const db = (await connectDB).db("forum");
        const result = await db.collection("comment").insertOne(saveData);
        res.status(200).json({ message: "success" });
      }
    }
  }

}

//  {contnent : 댓글내용
//   author : 유저의 id
//   parent : 게시글의 id
//}
