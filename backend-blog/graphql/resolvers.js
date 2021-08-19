const {
  getBlog,
  getCommentsFromBlog,
  getUser,
  createBlog,
  createComment,
  createUser
} = require('./loaders');

const resolvers = {
  Query: {
    getBlog,
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