import React from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {useParams, useHistory} from 'react-router-dom';

import {Input, Spin, Alert, Button} from 'antd/es';

import {GET_TODO} from '../queries';
import {UPDATE_TODO} from '../mutation';

const EditTodo: React.FC = () => {
  const {id} = useParams();
  const history = useHistory();

  const [updateTodo] = useMutation(UPDATE_TODO);

  const {loading, error, data} = useQuery(GET_TODO, {variables: {id}});

  if (loading) return <Spin size='large' />;

  if (error) return <Alert message={error.message} type='error' />;
  return (
    <React.Fragment>
      <Input.Search
        style={{width: '400px'}}
        placeholder='Enter Todo'
        enterButton='Update Todo'
        defaultValue={data.todo.type}
        onSearch={(value: any, e: any) => {
          updateTodo({variables: {id: data.todo.id, type: value}});
          history.push('/');
        }}
      />
      <br />
      <Button
        type='primary'
        onClick={(e: any) => {
          history.goBack();
        }}>
        Back
      </Button>
    </React.Fragment>
  );
};

export default EditTodo;
