import { createSlice } from '@reduxjs/toolkit';
import { getItems } from '../utils/utils';
import {
  addItem,
  deleteItem,
  showActiveItems,
  updateItem,
} from '../utils/utils';

const initialState = {
  items: getItems('todos'),
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todo-list',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items = addItem(state.items, action.payload);
    },
    update: (state, action) => {
      state.items = updateItem(state.items, action.payload);
    },
    remove: (state, action) => {
      state.items = deleteItem(state.items, action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.items = showActiveItems(state.items);
      state.filter = 'all';
    },
  },
});

export default todoSlice.reducer;
export const { add, update, remove, updateFilter, clearCompleted } =
  todoSlice.actions;
