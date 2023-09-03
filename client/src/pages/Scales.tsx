import Fretboard from '../components/fretboard';

export default function Scales() {
  return (
    <div id='scales-page' className="container center">
      <h2>Scales</h2>
      <div className='column narrow'>
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
        />
      </div>
    </div>
  );
}