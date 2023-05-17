import React from "react";
import { connectDB } from "../../../../util/database";
import { ObjectId } from "mongodb";
import UpdateButton from "./UpdateButton";

const DetailPage = async (props: {
  params: {
    id: string;
  };
}) => {
  const db = (await connectDB).db("forum");

  const id = props.params.id;

  const item = await db.collection("post").findOne({ _id: new ObjectId(id) });

  return (
    <div>
      <h1>hi</h1>
      <h4>{item.title}</h4>
      <p>{item._id}</p>
      <p>{item.content}</p>
      <UpdateButton id={item._id} />
    </div>
  );
};

export default DetailPage;
