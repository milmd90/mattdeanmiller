const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type GuitarString {
    fret: Int
    tone: Int
  }

  type Chord {
    _id: ID
    type: String
    shape: String
    first: GuitarString
    second: GuitarString
    third: GuitarString
    fourth: GuitarString
    fifth: GuitarString
    sixth: GuitarString
  }

  type User {
    _id: ID
    username: String
    password: String
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
