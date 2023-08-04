import './todo-form.scss';
import Container from '../container/container';
import Button from '../button/button';
import Box from '../box/box';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../features/todoSlice';

import { getNewItem } from '../../utils/utils';

function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleTodoCreation = (e) => {
    e.preventDefault();
    if (text.length < 3) return;
    dispatch(add(getNewItem(text)));
    setText('');
  };

  return (
    <Container tag='form' className='todo-form' onSubmit={handleTodoCreation}>
      <Box radius pl>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          autoFocus
          aria-label='Add a new task'
          type='text'
          name='add-todo-input'
          placeholder='Create a new todo...'
        />
      </Box>
      <Button type='submit'>
        <span className='a11y-hidden'>Create todo</span>
      </Button>
    </Container>
  );
}

export default TodoForm;
