import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const server_up = await startStandaloneServer(server, {
  listen: { port: 9000 },
});
console.log(`Server running at ${server_up.url}`);




// server.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });
