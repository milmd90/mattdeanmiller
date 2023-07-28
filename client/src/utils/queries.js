import { gql } from '@apollo/client';

export const QUERY_CHORDS = gql`
  query chords {
    chords {
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