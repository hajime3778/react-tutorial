import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectTodo, changeTitle, changeDescription } from "./todoSlice";

export const TodoItem: React.FC = () => {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <span>{`タイトル:${todo.title}  詳細:${todo.description}`}</span>
      <button onClick={() => {
        dispatch(changeTitle(""));
        dispatch(changeDescription(""));
      }}>
        初期化
      </button>
    </div>
  )
}
