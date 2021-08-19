const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime
  
  type Blog {
    title: String
    image: String
    description: String
    genre: String 
    date: String
    genre: String
    description: String
    comments: [Comment]
  }

  type Comment {
    author: User
    message: String
    time: DateTime
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