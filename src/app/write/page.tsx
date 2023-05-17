import React from "react";

const Write = () => {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/articles" method="POST">
        <input type="text" name="title" placeholder="제목" />
        <textarea name="content" placeholder="내용" />
        <button type="submit">작성</button>
      </form>
    </div>
  );
};

export default Write;
