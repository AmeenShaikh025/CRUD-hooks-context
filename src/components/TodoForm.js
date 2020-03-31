import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../actions/TodoActions";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      todo: {
        task: task
      }
    });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ui center aligned basic segment">
        <div className="ui left icon action input">
          <input
            type="text"
            placeholder="Add Todo"
            value={task}
            onChange={e => setTask(e.target.value)}
            required
          />
          <input type="submit" value="ADD" className="ui blue center button" />
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
