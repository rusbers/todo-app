import './toolbar.scss';
import Container from '../container/container';
import Box from '../box/box';
import Button from '../button/button';
import Filter from '../filter/filter';

import { clearCompleted } from '../../features/todoSlice';
import { useSelector, useDispatch } from 'react-redux';

function Toolbar() {
  return (
    <div className='toolbar'>
      <Container>
        <Box className='toolbar__inner' radius>
          <ActiveCounter />
          <Filter />
          <ClearCompleted />
        </Box>
      </Container>
    </div>
  );
}

function ActiveCounter() {
  const todos = useSelector((state) => state.todoList.items);

  const activeTodosCounter = todos.filter((todo) => !todo.completed).length;

  return <p className='toolbar__counter'>{activeTodosCounter} items left</p>;
}

function ClearCompleted() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(clearCompleted())}>Clear Completed</Button>
  );
}

export default Toolbar;
