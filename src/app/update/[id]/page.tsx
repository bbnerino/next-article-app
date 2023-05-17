import React from "react";
import { connectDB } from "../../../../util/database";
import { ObjectId } from "mongodb";

const Update = async (props: {
  params: {
    id: string;
  };
}) => {
  const id = props.params.id;
  const item = await (
    await connectDB
  )
    .db("forum")
    .collection("post")
    .findOne({ _id: new ObjectId(id) });
  return (
    <form action={`/api/articles/${id}`} method="POST">
      <h1>Update</h1>

      <h4>title</h4>
      <input name="title" defaultValue={item.title} />

      <h4>content</h4>
      <input name="content" defaultValue={item.content} />
      <button type="submit">Update</button>
    </form>
  );
};

export default Update;
