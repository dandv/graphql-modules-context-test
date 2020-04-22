import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';

export const UserModule = new GraphQLModule({
  typeDefs: gql`
    type User {
      id: String
      username: String
    }
    type Query {
      hello: String
    }
  `,
  resolvers: {
    User: {
      id: user => user._id,
      username: user => user.username
    },
    Query: {
      hello: (root, args, context) => {
        console.log(context.test);  // undefined instead of 'foo'
      }
    }
  }
});
