import './todo-item.scss';
import Box from '../box/box';
import Button from '../button/button';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { update, remove } from '../../features/todoSlice';
import { getEditData } from '../../utils/utils';

const TODO_UPDATE_KEYS = {
  COMPLETED: 'completed',
  TASK: 'task',
};

const TODO_ACTIONS = {
  EDIT: 'edit',
  SAVE: 'save',
  DELETE: 'delete',
};

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { completed, task, id } = todo;

  const [isEditingMode, setIsEditingMode] = useState(false);
  const [text, setText] = useState(task);
  const [checked, setChecked] = useState(completed);

  const toggleEditMode = () => {
    setIsEditingMode((state) => !state);
  };

  const handleTodoTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    const value = e.target.checked;
    const payload = getEditData(id, TODO_UPDATE_KEYS.COMPLETED, value);
    dispatch(update(payload));
  };

  const handleTextEditingSubmit = () => {
    toggleEditMode();
    const value = text;
    const payload = getEditData(id, TODO_UPDATE_KEYS.TASK, value);
    dispatch(update(payload));
  };

  const onEnterDown = (event) =>
    event.key === 'Enter' && handleTextEditingSubmit();

  const handleDeleteTodo = () => dispatch(remove(id));

  return (
    <Box tag='li' className='todo-item' pl>
      <TodoCheckbox
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={isEditingMode}
      >
        <TodoText>
          {isEditingMode ? (
            <EditableTodoText
              value={text}
              onChange={handleTodoTextChange}
              onKeyDown={onEnterDown}
            />
          ) : (
            text
          )}
        </TodoText>
      </TodoCheckbox>
      <div className='todo-item__actions'>
        <TodoAction
          type={isEditingMode ? TODO_ACTIONS.SAVE : TODO_ACTIONS.EDIT}
          aria-label='edit task'
          onClick={isEditingMode ? handleTextEditingSubmit : toggleEditMode}
        />
        <TodoAction
          type={TODO_ACTIONS.DELETE}
          aria-label='delete task'
          onClick={handleDeleteTodo}
        />
      </div>
    </Box>
  );
}

function TodoCheckbox({ children, ...rest }) {
  return (
    <label>
      <input className='a11y-hidden' type='checkbox' {...rest} />
      <span className='todo-item__checkbox'></span>
      {children}
    </label>
  );
}

function TodoText({ children }) {
  return <p className='todo-item__text'>{children}</p>;
}

function EditableTodoText({ ...rest }) {
  return (
    <input type='text' autoFocus className='todo-item__edit-input' {...rest} />
  );
}

function TodoAction({ type, ...rest }) {
  const iconClass = {
    edit: 'todo-item__btn--edit',
    save: 'todo-item__btn--save',
    delete: 'todo-item__btn--delete',
  };

  const icon = iconClass[type] || iconClass['delete'];

  return <Button className={`todo-item__btn ${icon}`} {...rest} />;
}

export default TodoItem;
