import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import express from 'express'
import path from 'path';

const app = express();
//path to access frontend assets
const assetPath = path.join(__dirname, '../../frontend/src/assets')

const server = new ApolloServer({ typeDefs, resolvers });

// get static files from the assets folder
app.use('/assets', express.static(assetPath));

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  // for serving the static files
  app.listen({ port: 4001 }, () => {
    console.log(`Static server ready at http://localhost:4001`);
  });
  console.log(`🚀  Server ready at: ${url}`);
})();