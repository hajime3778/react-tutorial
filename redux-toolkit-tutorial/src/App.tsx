import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { selectTodo, changeTitle, changeDescription } from "./todo/todoSlice";
import { TodoItem } from './todo/TodoItem'

function App() {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
          value={todo.title}
          onChange={(e) => dispatch(changeTitle(e.target.value))}
      />
      <input
          value={todo.description}
          onChange={(e) => dispatch(changeDescription(e.target.value))}
      />
      <TodoItem />
    </div>
  );
}

export default App;
