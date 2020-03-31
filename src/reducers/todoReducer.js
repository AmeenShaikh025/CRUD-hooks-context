import uuid from "uuid/v1";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CANCEL_EDIT,
  SAVE_EDIT
} from "../actions/TodoActions";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          task: action.todo.task,
          isEdit: false,
          id: uuid()
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.isEdit = true;
        } else {
          todo.isEdit = false;
        }
        return todo;
      });
    case CANCEL_EDIT:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.isEdit = false;
        }
        return todo;
      });
    case SAVE_EDIT:
      return state.map(todo => {
        if (todo.id === action.data[0]) {
          todo.task = action.data[1];
          todo.isEdit = false;
        }
        return todo;
      });
    default:
      return state;
  }
};
