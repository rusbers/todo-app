import { v4 as uuidv4 } from 'uuid';

const getItems = (key) => {
  const storedItems = localStorage.getItem(key);
  let result = [];

  if (storedItems) {
    try {
      result = JSON.parse(storedItems);
    } catch (e) {
      console.error('Invalid JSON string', e);
    }
  }

  return result;
};

const addItem = (currentItems, newItem) => [...currentItems, newItem];

const getNewItem = (task) => ({ task, completed: false, id: uuidv4() });

const getEditData = (id, key, value) => ({
  id,
  key,
  value,
});

const updateItem = (currentItems, item) => {
  const { id, key, value } = item;

  return currentItems.map((item) =>
    item.id === id ? { ...item, [key]: value } : item
  );
};

const deleteItem = (currentItems, id) =>
  currentItems.filter((item) => item.id !== id);

const showActiveItems = (currentItems) =>
  currentItems.filter((item) => !item.completed);

const showCompletedItems = (currentItems) =>
  currentItems.filter((item) => item.completed);

export {
  getItems,
  updateItem,
  addItem,
  deleteItem,
  showActiveItems,
  showCompletedItems,
  getNewItem,
  getEditData,
};
