import React from "react";
import "./App.css";
import AddNewPost from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <AddNewPost />
      <PostList />
    </div>
  );
}

export default App;
