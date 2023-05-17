"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

const DetailLink = () => {
  const router = useRouter();
  // router.back
  // [back,push,replace,reload,events,refresh,forward]
  // prefetch (미리로드)

  const a = usePathname(); // 현재 경로
  const b = useSearchParams(); // 쿼리스트링
  const c = useParams(); // 파라미터
  
  return <button onClick={() => router.push("/")}>링크</button>;
};

export default DetailLink;
