import { getTone } from "../../helpers/pitchTones";
import { stringPitch } from "../../helpers/common";

function range(min: number, max: number) {
  var len = max - min + 1;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = min + i;
  }
  return arr;
}

function FretboardString(props: {
  start: number,
  end: number,
  string: stringPitch,
  frets: number[]
  root: string
}) {
  const frets = range(props.start, props.end).map((i) => {
    const tone = getTone(props.root, i, props.string)
    return <span className={`fret-box fret-${i}`}>
      <div className={`fret-value ${props.frets.includes(i) ? `tone-${tone}` : ''}`}>
        {props.frets.includes(i) ? i : ''}
      </div>
    </span>
  })

  return (
    <div className="fretboard-string">
      {frets}
    </div>
  );
}

function FretboardMarkers(props: {
  start: number,
  end: number,
  frets: number[]
}) {
  const frets = range(props.start, props.end).map((i) => {
    return <span className={`fret-box fret-${i}`} >
      <div className='fret-value'>
        {props.frets.includes(i) ? i : ''}
      </div>
    </span >
  })

  return (
    <div className="fret-markers">
      {frets}
    </div>
  );
}

function Frets(props: {
  start: number,
  end: number,
  fretMarkers: number[],
  fretDoubleMarkers: number[],
}) {
  const frets = range(props.start, props.end).map((i) => {
    let fretMarkers = [];
    if (props.fretDoubleMarkers.includes(i)) {
      fretMarkers.push(<div className='fret-marker'>{'\u2022'}</div>);
      fretMarkers.push(<div className='fret-marker'>{'\u2022'}</div>);
    } else if (props.fretMarkers.includes(i)) {
      fretMarkers.push(<div className='fret-marker'>{'\u2022'}</div>);
    }
    return <span className={`fret fret-${i}`}>
      {fretMarkers}
    </span>
  })

  return (
    <div className="frets">
      {frets}
    </div>
  );
}


export default function Fretboard(props: {
  start: number,
  end: number,
  frets: {
    'e': number[],
    'B': number[],
    'G': number[],
    'D': number[],
    'A': number[],
    'E': number[],
  }
  root: string
}) {
  return (
    <div className="fretboard">
      <div className="fretboard-content">
        <Frets
          start={props.start}
          end={props.end}
          fretMarkers={[3, 5, 7, 9, 15, 17]}
          fretDoubleMarkers={[12]}
        />
        <div className="fretboard-strings">
          <FretboardString
            start={props.start}
            end={props.end}
            string={'e'}
            frets={props.frets['e']}
            root={props.root}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'B'}
            frets={props.frets['B']}
            root={props.root}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'G'}
            frets={props.frets['G']}
            root={props.root}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'D'}
            frets={props.frets['D']}
            root={props.root}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'A'}
            frets={props.frets['A']}
            root={props.root}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'E'}
            frets={props.frets['E']}
            root={props.root}
          />
        </div>
      </div>
      <FretboardMarkers
        start={props.start}
        end={props.end}
        frets={[3, 5, 7, 9, 12]}
      />
    </div>
  );
}
