import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Comments() {
  {
    /*funtion displays a list. In this case random comments and their properties
    get list of comments and its properties
    iterate through the comments
    assign comment properties 
    then display them
    
  There are two ways below to do this the first is using the new react hooks and 
  the other is using a form of Async fetch (axios await, Suspense etc)
  */
  }

  // Import comments from the redux store
  const comment = useSelector(state => state.comments);

  // *Using the New React Hooks Methods (useeffect)
  {
    /*const [bodyArray, setbodyArray] = useState([]);
  const [nameArray, setnameArray] = useState([]);
  const [emailArray, setemailArray] = useState([]);

  useEffect(() => {
    if (comment.length > 0){
      const body = comment.map(comment=>
        <div key={post.id}>
          <h3>{comment.body}</h3>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
        </div>
        comment.body
        )
      const name = comment.map(x=>x.name)
      const email = comment.map(x=>x.email)
      setbodyArray(body)
      setemailArray(email)
      setnameArray(name)
      console.log('These are comments', bodyArray)
    }
  });
  */
  }

  // or

  const body = comment.map(comment => (
    <div key={comment.id}>
      <div className="commentBody">
        <p>{comment.body}</p>
      </div>
      <div className="commentInfo">
        <span className="commentName"> {comment.name}</span>
        <span className="commentEmail"> {comment.email}</span>
      </div>
    </div>
  ));

  return (
    <div className="commentSection">
      <h5 className="commentHeader"> Comments </h5>
      {body}
    </div>
  );
}

export default Comments;
