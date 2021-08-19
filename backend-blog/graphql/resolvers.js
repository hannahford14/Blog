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

moudle.export.resolvers = resolvers;