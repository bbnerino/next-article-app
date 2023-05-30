import React from "react";
import { connectDB } from "../../../util/database";
import Link from "next/link";
import DetailLink from "../list/DetailLink";
import ListItem from "../list/ListItem";

export const dynamic = "force-dynamic";
export const revalidate = 60; // 60초마다 새로운 데이터를 받아옵니다.

const page = async () => {
  const list: any[] = await (await connectDB)
    .db("forum")
    .collection("post")
    .find()
    .toArray();

  // cache: "force-cache", // 서버 자원 이용 가능  (실은 안 적어도 캐싱됩니다.)
  // cache : "no-store" // 매번 요청 보내서 새로운 데이터를 받아옵니다.
  // next: {revalidate: 60} // 60초마다 새로운 데이터를 받아옵니다.

  // 1. 직접 api 를 만들어서 fetch 를 통해 데이터를 받으면 캐싱이 됩니다.
  // 2. Revalidate 를 통해 캐싱을 할 수 있습니다.

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
