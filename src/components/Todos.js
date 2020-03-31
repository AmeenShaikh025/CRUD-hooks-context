import React, { useContext, useState, useEffect } from "react";
import { TodoContext, dispatch } from "../contexts/TodoContext";
import {
  DELETE_TODO,
  EDIT_TODO,
  CANCEL_EDIT,
  SAVE_EDIT
} from "../actions/TodoActions";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [newtask, setNewtask] = useState("");

  return todos.length ? (
    <div>
      <ul>
        {todos.map(todo => {
          return todo.isEdit ? (
            <div key={todo.id}>
              <form>
                <div className="ui segment">
                  <div className="ui two column very relaxed grid">
                    <div className="column">
                      <div className="ui input">
                        <input
                          type="text"
                          value={newtask}
                          onChange={e => setNewtask(e.target.value)}
                          plcaeholder="Edit Task"
                          required
                        />
                      </div>
                    </div>
                    <div className="column">
                      <input
                        className="ui green button"
                        type="submit"
                        value="Save"
                        onClick={() =>
                          dispatch({
                            type: SAVE_EDIT,
                            data: [todo.id, newtask]
                          })
                        }
                      />
                      <input
                        className="ui red button"
                        type="button"
                        value="Cancel"
                        onClick={() =>
                          dispatch({ type: CANCEL_EDIT, id: todo.id })
                        }
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <li key={todo.id}>
              <div className="ui segment">
                <div className="ui two column very relaxed grid">
                  <div className="column">
                    <h3>{todo.task}</h3>
                  </div>
                  <div className="column">
                    <div>
                      <input
                        className="ui teal button"
                        value="Edit"
                        type="button"
                        onClick={() =>
                          dispatch({ type: EDIT_TODO, id: todo.id })
                        }
                      />
                      <input
                        className="ui red button"
                        value="Delete"
                        type="button"
                        onClick={() =>
                          dispatch({ type: DELETE_TODO, id: todo.id })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="sub header">Nothing to do, Free Time !!!</div>
  );
};

export default Todos;
