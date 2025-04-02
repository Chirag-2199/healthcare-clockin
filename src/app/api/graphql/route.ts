import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { schema } from './schema';
import { resolvers } from './resolvers';

const executableSchema = makeExecutableSchema({ typeDefs: schema, resolvers });
const server = new ApolloServer({ schema: executableSchema });

const handler = startServerAndCreateNextHandler(server);

export const GET = async (req: Request) => handler(req);
export const POST = async (req: Request) => handler(req);
