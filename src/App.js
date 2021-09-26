import React, { useState, useEffect } from "react";
import "./index.css";
import Post from "./components/Post";
import Skeleton from "./components/Skeleton";

function App(params) {
  const SkeletonComponent = Skeleton(Post);
  const [AppState, setAppState] = useState({
    loading: false,
    posts: null
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "http://127.0.0.1:8000/api/";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <h1>Latest Post</h1>
      <SkeletonComponent isLoading={AppState.loading} posts={AppState.posts} />
    </div>
  );
}
export default App;
