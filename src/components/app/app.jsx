import Container from '../container/container';
import ContentWrapper from '../content-wrapper/content-wrapper';
import AppHeader from '../app-header/app-header';
import TodoForm from '../todo-form/todo-form';
import TodoList from '../todo-list/todo-list';
import Toolbar from '../toolbar/toolbar';

import ThemeContextProvider from '../../context/theme-context-provider';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const todos = useSelector((state) => state.todoList.items);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ThemeContextProvider>
      <ContentWrapper.Top>
        <Container>
          <AppHeader />
        </Container>
      </ContentWrapper.Top>
      <ContentWrapper.Bottom>
        <Container tag='main'>
          <TodoForm />
          <TodoList />
          <Toolbar />
        </Container>
      </ContentWrapper.Bottom>
    </ThemeContextProvider>
  );
}

export default App;
