const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Chord {
    _id: ID
    type: String
    shape: String
    frets: [Int]
    user: User
  }

  type User {
    _id: ID
    username: String
    password: String
    userType: String
    chords: [Chord]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    chords(shape: String, type: String): [Chord]
    user(username: String!): User
  }

  type Mutation {
    createUser(username: String!, password: String!): Auth
    updateUser(username: String, password: String): User
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
