import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <Todos />
    </React.Fragment>
  );
};

export default Home;
