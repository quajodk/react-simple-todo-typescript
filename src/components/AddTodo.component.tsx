import React from 'react';
import {useMutation} from '@apollo/react-hooks';

import {Input} from 'antd/es';

import {GET_TODOS} from '../queries';
import {ADD_TODO} from '../mutation';
const AddTodo: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');

  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{query: GET_TODOS}]
  });

  return (
    <Input.Search
      style={{width: '400px'}}
      placeholder='Enter todo'
      enterButton='Add todo'
      value={inputValue}
      onChange={(e: any) => setInputValue(e.target.value)}
      onSearch={(value: any, e: any) => {
        addTodo({variables: {type: value}});
        setInputValue('');
      }}
    />
  );
};

export default AddTodo;
