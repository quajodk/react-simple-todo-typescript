import React from 'react';
import AddTodo from './AddTodo.component';
import Todos from './Todos.component';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Todos />
      <AddTodo />
    </React.Fragment>
  );
};

export default Home;
