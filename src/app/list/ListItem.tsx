"use client";
import React, { useEffect, useState } from "react";
import { connectDB } from "../../../util/database";
import Link from "next/link";

const ListItem = ({ list }: { list: any[] }) => {
  useEffect(() => {}, []);
  const deleteItem = (e: any, id: any) => {
    fetch(`/api/articles/${id.toString()}`, {
      method: "DELETE",
    }).then(() => {
      if (e.target.parentElement) {
        e.target.parentElement.style.opacity = "0";
        setTimeout(() => {
          if (e.target.parentElement)
            e.target.parentElement.style.display = "none";
        }, 1000);
      }
    });
  };
  return (
    <>
      {list.map((item, idx) => (
        <div className="list-item" key={idx}>
          <Link prefetch={false} href={`/detail/${item._id.toString()}`}>
            <h4>{item.title}</h4>
          </Link>
          <span onClick={(e) => deleteItem(e, item._id)}>🤚</span>
          <p>{item.content}</p>
        </div>
      ))}
    </>
  );
};

export default ListItem;
