import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  type User {
    id: Int!
    email: String!
    role: String!
    createdAt: String!
    updatedAt: String!
  }

  type Shift {
    id: Int!
    userId: Int!
    clockInTime: String!
    clockOutTime: String
    location: String!
    note: String
    createdAt: String!
  }

  type Query {
    users: [User]
    shifts: [Shift]
  }

  type Mutation {
  createUser(email: String!, password: String!, role: String!): User
  clockIn(userId: Int!, location: String!, note: String): Shift
  clockOut(userId: Int!, note: String): Shift
}

`;

export const schema = makeExecutableSchema({ typeDefs });
