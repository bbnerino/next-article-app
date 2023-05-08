import React from "react";
import { connectDB } from "../../../util/database";

const page = async () => {
  const db = (await connectDB).db("forum");
  const list: {
    title: string;
    content: string;
  }[] = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {list.map((item, idx) => {
        return (
          <div className="list-item" key={idx}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
