import './todo-list.scss';
import TodoItem from '../todo-item/todo-item';

import { useSelector } from 'react-redux';
import { getFilteredTodos } from '../../utils/filter';

function TodoList() {
  const todos = useSelector(state => state.todoList.items);
  const filter = useSelector(state => state.todoList.filter);

  const visibleTodos = getFilteredTodos(todos, filter)

  return (
    <ul className='todo-list'>
      {visibleTodos.map((todoItem) => (
        <TodoItem key={todoItem.id} todo={todoItem} />
      ))}
    </ul>
  );
}

export default TodoList;
