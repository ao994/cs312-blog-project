import React from "react";


function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h4>{props.date}</h4>
      <p>{props.body}</p>
      <ul>{props.tags.map(tag => <li key={tag}>#{tag} </li>)}</ul>
    </div>
  );
}

export default Post;
