import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';

import {List, Icon, Spin, Alert} from 'antd/es';

import {Todo} from '../model/Todo';

import {GET_TODOS} from '../queries';

const Todos: React.FC = () => {
  const {loading, error, data} = useQuery(GET_TODOS);

  if (loading) return <Spin size='large' />;

  if (error) return <Alert message={error.message} type='error' />;

  return (
    <List
      size='large'
      dataSource={data.todos}
      renderItem={(todo: Todo) => (
        <List.Item
          actions={[
            <Link to={`/todos/${todo.id}/edit`}>
              <Icon type='edit' theme='filled' />
            </Link>
          ]}>
          <Link to={`/todos/${todo.id}`}>{todo.type}</Link>
        </List.Item>
      )}
    />
  );
};

export default Todos;
