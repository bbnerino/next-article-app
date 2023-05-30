"use client";
import React, { useEffect, useState } from "react";

const Comment = ({ id }: { id: string }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isSubmit, setSubmit] = useState(false);
  const onSubmit = () => {
    setSubmit(!isSubmit);
    fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        content: comment,
        id: id,
        user: "test",
      }),
    });
  };

  useEffect(() => {
    console.log(isSubmit);
    fetch(`/api/comment/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setComments(res));
  }, [isSubmit, id]);

  return (
    <>
      <h1>댓글 목록 보여질 부분</h1>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={onSubmit}>댓글 작성</button>
      <div>
        {comments.map(
          (comment: { _id: string; user: string; content: string }) => (
            <div key={comment._id}>
              <div>{comment.user}</div>
              <div>{comment.content}</div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Comment;
