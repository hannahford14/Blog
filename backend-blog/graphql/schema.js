const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Blog {
    title: String
    image: String
    date: String
    comments: [Comment]
  }

  type Comment {
    author: User
    message: String
  }

  type User {
    first_name: String
    last_name: String
    email: String
  }

  type Query {
    getBlog: Blog
    getCommentsFromBlog: [Comment]
    getUser: User
  }

  type Mutation {
    createBlog: Blog
    createComment: Comment
    createUser: User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports.typeDefs = typeDefs;