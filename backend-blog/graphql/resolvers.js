const { GraphQLDateTime } = require('graphql-iso-date');

const {
  getBlogsForHome,
  getCommentsFromBlog,
  getUser,
  createBlog,
  createComment,
  createUser
} = require('./loaders');

const resolvers = {
  Query: {
    getBlogsForHome,
    getCommentsFromBlog,
    getUser
  },

  Mutation: {
    createBlog,
    createComment,
    createUser
  }
};

module.exports.resolvers = resolvers;