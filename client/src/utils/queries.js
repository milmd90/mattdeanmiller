import { gql } from '@apollo/client';

export const QUERY_CHORDS = gql`
  query chords($type: String!, $shape: String) {
    chords(type: $type, shape: $shape) {
      type
      shape
      frets 
    }
  }
`;