import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { TodoInput, Todo, TodoId, TodoUpdatePayload } from './types';
import { createTodo, removeTodo, updateTodo, restoreTodo } from './crud';



//debug
//[
//	{id: 0, title: 'a', body: '', status: 'waiting', createdAt: '2022-12-20 00:00:00', updatedAt: '2022-12-20 00:00:00', deletedAt: null},
//	{id: 1, title: 'b', body: '', status: 'waiting', createdAt: '2022-12-20 00:00:00', updatedAt: '2022-12-20 00:00:00', deletedAt: null},
//	{id: 2, title: 'c', body: '', status: 'waiting', createdAt: '2022-12-20 00:00:00', updatedAt: '2022-12-20 00:00:00', deletedAt: null},
//	{id: 3, title: 'd', body: '', status: 'waiting', createdAt: '2022-12-20 00:00:00', updatedAt: '2022-12-20 00:00:00', deletedAt: null},
//]

export type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos:[
	]
};


export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoInput>) => {
      const { title, body } = action.payload;
      if (!title || !body)
        throw new Error('タイトルと本文の両方を入力してください');

      const todo = createTodo(action.payload);
      state.todos.push(todo);
    },
    remove: (state, action: PayloadAction<TodoId>) => {
			//以下のコードは、レコードを完全削除する
			//state.todos = state.todos.filter((todo) => todo.id !== action.payload);

			//以下のコードは、論理削除する
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      const todo = state.todos[index];
      if (!todo) return;
      state.todos[index] = removeTodo(todo);
    },
    update: (state, action: PayloadAction<TodoUpdatePayload>) => {
      const { id, input } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      const todo = state.todos[index];
      if (!todo) return;

      state.todos[index] = updateTodo({
        ...todo,
        ...input,
      });
    },
    restore: (state, action: PayloadAction<TodoId>) => {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      const todo = state.todos[index];
      if (!todo) return;

      state.todos[index] = restoreTodo(todo);
    },
  },
});

export const { create, remove, update, restore } = todoSlice.actions;

export const selectTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.deletedAt === undefined);

export const selectDeletedTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.deletedAt !== undefined);

export default todoSlice.reducer;