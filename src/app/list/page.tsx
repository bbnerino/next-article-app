import React from "react";
import { connectDB } from "../../../util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

export const dynamic = "force-dynamic";

const page = async () => {
  const list: any[] = await (await connectDB)
    .db("forum")
    .collection("post")
    .find()
    .toArray();
    
  return (
    <div className="list-bg">
      <button>
        <Link href="/write">WRITE</Link>
      </button>
      <DetailLink />
      <ListItem list={list} />
    </div>
  );
};

export default page;
