import React from "react";
import "./index.css";
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <div className="ui raised very padded text container segment center aligned common-box">
          <Navbar />
          <TodoForm />
        </div>
        <div className="ui raised very padded text container segment center aligned common-box">
          <Todos />
        </div>
      </TodoContextProvider>

      <div className="ui raised very padded text container segment center aligned common-box">
        <h1 className="ui header">ALL POSTS</h1>
        <Posts />
      </div>
    </div>
  );
}

export default App;
