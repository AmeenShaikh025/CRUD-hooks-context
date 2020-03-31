import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h1 className="ui header">Todo CRUD App</h1>
      <p className="sub header">{todos.length} todo is pending...</p>
    </div>
  );
};

export default Navbar;
