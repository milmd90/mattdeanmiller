import { gql } from '@apollo/client';

export const QUERY_CHORDS = gql`
  query chords($type: String!, $shape: String) {
    chords(type: $type, shape: $shape) {
      type
      shape
      first {
        fret
        tone
      }
      second {
        fret
        tone
      }
      third {
        fret
        tone
      }
      fourth {
        fret
        tone
      }
      fifth {
        fret
        tone
      }
      sixth {
        fret
        tone
      }
    }
  }
`;