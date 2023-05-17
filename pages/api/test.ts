import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const now = new Date();
    return res.status(200).json(now);
  }
  if (req.method === "POST") {
    return res.status(200).json({ name: "John Doe" });
  }
}
