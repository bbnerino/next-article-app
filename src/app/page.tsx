import { connectDB } from "../../util/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  const list = await db.collection("post").find().toArray();
  console.log(list);
  return (
    <div>
      <h1>hi</h1>
      {list[0].title}
      {list[0].content}
    </div>
  );
}
