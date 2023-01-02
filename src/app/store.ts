import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import modalReducer from '../features/modal/modalSlice'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'



export const store = configureStore({
  reducer: {
    todos: todosReducer,
		modal: modalReducer,
		posts: postsReducer,
		users: usersReducer
  },
});

// https://redux.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;