import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

function Comments() {
  const comment = useSelector(state => state.comments)
  const [bodyArray, setbodyArray] = useState([])
  const [nameArray, setnameArray] = useState([])
  const [emailArray, setemailArray] = useState([])
  
  useEffect(() => {
    if (comment.length > 0){
      const body = comment.map(x=>x.body)
      const name = comment.map(x=>x.name)
      const email = comment.map(x=>x.email)
      setbodyArray(body)
      setemailArray(email)
      setnameArray(name)
      console.log('These are comments', bodyArray)
    }
  });
  // const array = comment.map(x => x)
  // console.log('These are comments', array)
  return (
    <div className="commentSection">
      <h5 className="commentHeader"> Comments </h5>
      <div>
        <div className="commentBody"><p>{bodyArray[0]}</p></div>
        <div className="commentInfo">
          <span className="commentName"> {nameArray[0]}</span>
          <span className="commentEmail"> {emailArray[0]}</span>
        </div>
      </div>
      <div>
        <div className="commentBody"><p>{bodyArray[1]}</p></div>
        <div className="commentInfo">
          <span className="commentName"> {nameArray[1]}</span>
          <span className="commentEmail"> {emailArray[1]}</span>
        </div>
      </div>
      <div>
        <div className="commentBody"><p>{bodyArray[2]}</p></div>
        <div className="commentInfo">
          <span className="commentName"> {nameArray[2]}</span>
          <span className="commentEmail">{emailArray[2]}</span>
        </div>
      </div>
    </div>
  );
}

export default Comments;

