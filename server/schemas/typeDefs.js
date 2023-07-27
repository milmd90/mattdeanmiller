const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Chord {
    _id: ID
  }

  type Query {
    chords: [Chord]!
    chords(Chord: ID!): Chord
  }
`;

module.exports = typeDefs;
