import { showActiveItems, showCompletedItems } from './utils';

const FILTER = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active'
}

const filterList = [FILTER.ALL, FILTER.COMPLETED, FILTER.ACTIVE];

const getFilteredTodos = (todos, filter = 'all') => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return showCompletedItems(todos);
    case 'active':
      return showActiveItems(todos);
    default:
      return todos;
  }
};

export {FILTER, filterList, getFilteredTodos};