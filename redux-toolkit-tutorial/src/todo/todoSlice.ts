import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export type Todo = {
  title: string,
  description: string,
}

const initialState: Todo = {
  title: "",
  description: "",
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    changeDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    }
  }
})

export const { changeTitle, changeDescription } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;