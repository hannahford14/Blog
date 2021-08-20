const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DateTime

  type Blog {
    title: String
    image: String
    date: String
    genre: String
    description: String
    comments: [Comment]
  }

  type BlogDescription {
    rid: RecordID
    title: String
    image: String
    date: String
    comments: Int
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

  type RecordID {
    cluster: Int
    position: Int
  }

  type Query {
    getBlogsForHome: [BlogDescription]
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