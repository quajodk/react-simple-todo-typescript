import {gql} from 'apollo-boost';

export const GET_TODOS = gql`
  query {
    todos {
      id
      type
    }
  }
`;

export const GET_TODO = gql`
  query getTodo($id: String!) {
    todo(id: $id) {
      id
      type
    }
  }
`;
