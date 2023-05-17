"use client";
import { useRouter } from "next/navigation";
import React from "react";

const UpdateButton = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/update/${id}/`)}>
      UpdateButton
    </button>
  );
};

export default UpdateButton;
