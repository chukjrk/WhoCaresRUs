import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Home from "./components/homeComponent/home";
import Header from "./components/headerComponent/header";
import Comment from "./components/homeComponent/comments";
import { addComment } from "./actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (mounted) {
        dispatch(addComment(result.data));
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <Comment />
    </div>
  );
}

export default App;
