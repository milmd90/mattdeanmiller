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

  type Query {
    chords(shape: String, type: String): [Chord]
  }
`;

module.exports = typeDefs;
