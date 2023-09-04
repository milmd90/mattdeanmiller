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
            end={12}
            frets={{
              'e': [2, 3, 5],
              'B': [2, 3, 5],
              'G': [2, 4],
              'D': [2, 4, 5],
              'A': [2, 4, 5],
              'E': [2, 3, 5]
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
            end={12}
            frets={{
              'e': [5, 7],
              'B': [5, 7, 8],
              'G': [4, 6, 7],
              'D': [4, 5, 7],
              'A': [4, 5, 7],
              'E': [5, 7]
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
            end={12}
            frets={{
              'e': [7, 9, 10],
              'B': [7, 8, 10],
              'G': [6, 7, 9],
              'D': [5, 7, 9],
              'A': [5, 7, 9],
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
            end={12}
            frets={{
              'e': [2, 4, 5],
              'B': [2, 3, 5],
              'G': [1, 2, 4],
              'D': [2, 4],
              'A': [2, 4, 5],
              'E': [2, 4, 5]
            }}
            root={'A'}
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
            end={12}
            frets={{
              'e': [4, 5, 7],
              'B': [5, 7],
              'G': [4, 6, 7],
              'D': [4, 6, 7],
              'A': [4, 5, 7],
              'E': [4, 5, 7]
            }}
            root={'A'}
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
            end={12}
            frets={{
              'e': [7, 9, 10],
              'B': [7, 9, 10],
              'G': [6, 7, 9],
              'D': [6, 7, 9],
              'A': [5, 7, 9],
              'E': [5, 7, 9]
            }}
            root={'A'}
          />
        </div>
      </div>
    </div>
  );
}