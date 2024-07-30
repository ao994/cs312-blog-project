import React from "react";

function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h4>{props.date}</h4>
      <p>{props.body}</p>
      <p>{props.tags}</p>
    </div>
  );
}

export default Post;
