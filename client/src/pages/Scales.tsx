import Fretboard from '../components/fretboard';

export default function Scales() {
  return (
    <div id='scales-page' className="container center">
      <h2>Scales</h2>
      <div className='column narrow'>
        <div className='item'>
          <h3 id='scale-overview'>
            Overview
          </h3>
          <p>
            Below are 6 common patterns for playing major scales.
            There are two ways to refer to each of these patterns.
            The first is by the open chord contained in the pattern.
            The second is by the lowest root string and the finger used to play it.
          </p><p>
            For example, let's consider the pattern labelled C Shape (5, 4).
            Notice how playing a major arpeggio using this pattern resembles an open C?
            However, we can also refer to the pattern as 5, 4, because we play the bottom root on the A string (5) using our pinky (4) finger.
          </p>
        </div>
        <div className='item'>
          <h3>
            D Major Scale: C Shape (5, 4)
          </h3>
          <Fretboard
            start={0}
            end={16}
            frets={{
              'e': [2, 3, 5],
              'B': [2, 3, 5],
              'G': [2, 4],
              'D': [2, 4, 5],
              'A': [2, 4, 5],
              'E': [2, 3, 5]
            }}
            fingers={{
              'e': [1, 2, 4],
              'B': [1, 2, 4],
              'G': [1, 3],
              'D': [1, 3, 4],
              'A': [1, 3, 4],
              'E': [1, 2, 4]
            }}
            root={'D'}
          />
        </div>
        <div className='item'>
          <h3>
            D Major Scale: A Shape (5, 2)
          </h3>
          <Fretboard
            start={0}
            end={16}
            frets={{
              'e': [5, 7],
              'B': [5, 7, 8],
              'G': [4, 6, 7],
              'D': [4, 5, 7],
              'A': [4, 5, 7],
              'E': [5, 7]
            }}
            fingers={{
              'e': [1, 3],
              'B': [1, 3, 4],
              'G': [1, 3, 4],
              'D': [1, 2, 4],
              'A': [1, 2, 4],
              'E': [2, 4]
            }}
            root={'D'}
          />
        </div>
        <div className='item'>
          <h3>
            D Major Scale: A/G Shape (5, 1)
          </h3>
          <Fretboard
            start={0}
            end={16}
            frets={{
              'e': [7, 9, 10],
              'B': [7, 8, 10],
              'G': [6, 7, 9],
              'D': [5, 7, 9],
              'A': [5, 7, 9],
              'E': []
            }}
            fingers={{
              'e': [1, 3, 4],
              'B': [1, 2, 4],
              'G': [1, 2, 4],
              'D': [1, 2, 4],
              'A': [1, 2, 4],
              'E': []
            }}
            root={'D'}
          />
        </div>
        <div className='item'>
          <h3>
            D Major Scale: G Shape (6, 4)
          </h3>
          <Fretboard
            start={0}
            end={16}
            frets={{
              'e': [7, 9, 10],
              'B': [7, 8, 10],
              'G': [6, 7, 9],
              'D': [7, 9],
              'A': [7, 9, 10],
              'E': [7, 9, 10]
            }}
            fingers={{
              'e': [1, 3, 4],
              'B': [1, 2, 4],
              'G': [1, 2, 4],
              'D': [1, 3],
              'A': [1, 3, 4],
              'E': [1, 3, 4]
            }}
            root={'D'}
          />
        </div>
        <div className='item'>
          <h3>
            D Major Scale: E Shape (6, 2)
          </h3>
          <Fretboard
            start={0}
            end={16}
            frets={{
              'e': [9, 10, 12],
              'B': [10, 12],
              'G': [9, 11, 12],
              'D': [9, 11, 12],
              'A': [9, 10, 12],
              'E': [9, 10, 12]
            }}
            fingers={{
              'e': [1, 2, 4],
              'B': [2, 4],
              'G': [1, 3, 4],
              'D': [1, 3, 4],
              'A': [1, 2, 4],
              'E': [1, 2, 4]
            }}
            root={'D'}
          />
        </div>
        <div className='item'>
          <h3>
            D Major Scale: D Shape (6, 1)
          </h3>
          <Fretboard
            start={0}
            end={16}
            frets={{
              'e': [12, 14, 15],
              'B': [12, 14, 15],
              'G': [11, 12, 14],
              'D': [11, 12, 14],
              'A': [10, 12, 14],
              'E': [10, 12, 14]
            }}
            fingers={{
              'e': [1, 3, 4],
              'B': [1, 3, 4],
              'G': [1, 2, 4],
              'D': [1, 2, 4],
              'A': [1, 2, 4],
              'E': [1, 2, 4]
            }}
            root={'D'}
          />
        </div>
      </div>
    </div>
  );
}