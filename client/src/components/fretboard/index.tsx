import { getTone } from "../../helpers/pitchTones";
import { stringPitch, strings, IScale } from "../../helpers/common";

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
  frets: number[],
  fingers: number[]
  root: string
}) {
  const frets = range(props.start, props.end).map((i) => {
    const tone = getTone(props.root, i, props.string)
    const index = props.frets.indexOf(i);
    const fingers = props.fingers[index];
    return <span className={`fret-box fret-${i}`}>
      <div className={`fret-value ${props.frets.includes(i) ? `tone-${tone}` : ''}`}>
        {props.frets.includes(i) ? fingers : ''}
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
  id: string,
  start: number,
  end: number,
  frets: IScale
  fingers?: IScale
  root: string
}) {
  const {
    fingers
  } = props;
  const fretMarkers = [3, 5, 7, 9, 12, 15, 17]
  return (
    <div id={`${props.id}`} className="fretboard">
      <div>
        <div className="fretboard-content">
          <Frets
            start={props.start}
            end={props.end}
            fretMarkers={fretMarkers}
            fretDoubleMarkers={[12]}
          />
          <div className="fretboard-strings">
            {strings.map(tabString =>
              <FretboardString
                start={props.start}
                end={props.end}
                string={tabString}
                frets={props.frets[tabString]}
                fingers={fingers ? fingers[tabString] : []}
                root={props.root}
              />
            )}
          </div>
        </div>
        <FretboardMarkers
          start={props.start}
          end={props.end}
          frets={fretMarkers}
        />
      </div>
    </div>
  );
}
