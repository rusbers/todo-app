import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
});

export default store;
