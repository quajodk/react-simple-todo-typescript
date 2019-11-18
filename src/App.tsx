import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import './App.css';
// import {Layout} from 'antd';

import Home from './components/Home';
import Todo from './components/Todo';
import EditTodo from './components/EditTodo';

const client = new ApolloClient({
  uri: 'https://plp0mopxq.sse.codesandbox.io'
});

// const {Header, Content, Footer} = Layout;

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='App'>
          <section className='App-header'>
            <h4>Simple Todo App</h4>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/todos/:id' exact component={Todo} />
              <Route path='/todos/:id/edit' exact component={EditTodo} />
            </Switch>
          </section>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
