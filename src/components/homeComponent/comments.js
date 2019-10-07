import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

function Comments() {
  const comment = useSelector(state => state.comments);
  const body = comment.map(comment=>
        <div key={comment.id}>
          <div className="commentBody"><p>{comment.body}</p></div>
          <div className="commentInfo">
            <span className="commentName"> {comment.name}</span>
            <span className="commentEmail"> {comment.email}</span>
        </div>
        </div>
        );
  // **** state used for the commented out using hooks code example ***
  const [bodyArray, setbodyArray] = useState([]);
  const [nameArray, setnameArray] = useState([]);
  const [emailArray, setemailArray] = useState([]);
  
  // useEffect(() => {
  //   if (comment.length > 0){
  //     const body = comment.map(comment=>
  //       <div key={post.id}>
  //         <h3>{comment.body}</h3>
  //         <p>{comment.name}</p>
  //         <p>{comment.email}</p>
  //       </div>
  //       comment.body
  //       )
  //     const name = comment.map(x=>x.name)
  //     const email = comment.map(x=>x.email)
  //     setbodyArray(body)
  //     setemailArray(email)
  //     setnameArray(name)
  //     console.log('These are comments', bodyArray)
  //   }
  // });

  return (
    <div className="commentSection">
      <h5 className="commentHeader"> Comments </h5>
      {body}
    </div>
  );
}

export default Comments;

