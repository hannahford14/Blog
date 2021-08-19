const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');
const express = require('express');
const http = require('http');

const config = {
  port: 4000,
  hostname: 'localhost'
};

const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();

apollo.applyMiddleware({ app });

let server = http.createServer(app);

apollo.installSubscriptionHandlers(server);

server.listen({ port: config.port }, () => {
    console.log(
      `Server is ready at`, 
      `http://${config.hostname}:${config.port}${apollo.graphqlPath}`
    );
});