const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Mutation = require('./resolvers/Mutation');
// const Subscription = require('./resolvers/Subscription');
const Query = require('./resolvers/Query');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Mutation,
    Query
    // Subscription
  },
  context: {
    prisma
  }
});

server.start({ port: 4001 }, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
