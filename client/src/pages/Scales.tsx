import Fretboard from '../components/fretboard';

export default function Scales() {
  return (
    <div id='scales-page' className="container center">
      <h2>Scales</h2>
      <div className='column narrow'>
        <div className='item'>
          <h3 id='sound'>
            Overview
          </h3>
        </div>
        <div className='item'>
          <h3>
            C Shape Major Scale
          </h3>
          <h4>
            (5, 4)
          </h4>
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
            A Shape Major Scale
          </h3>
          <h4>
            (5, 2)
          </h4>
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
            A Extended Shape Major Scale
          </h3>
          <h4>
            (5, 1)
          </h4>
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
            G Shape Major Scale
          </h3>
          <h4>
            (6, 4)
          </h4>
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
            E Shape Major Scale
          </h3>
          <h4>
            (6, 2)
          </h4>
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
            D Shape Major Scale
          </h3>
          <h4>
            (6, 1)
          </h4>
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