import React from "react";

function UserResult(props) {
  return (
    <div className="user">
      <h2>{props.username}</h2>
      <h3>{props.fName} {props.lName}</h3>
      <h4>{props.blogTitle}</h4>
      <p>{props.blogDescription}</p>
    </div>
    
  );
}

export default UserResult;
