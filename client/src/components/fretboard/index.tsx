import { getTone } from "../../helpers/pitchTones";
import { stringPitch, tabStrings, IScale, TabString, getStringPitch } from "../../helpers/common";
import { useEffect, useState } from "react";

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
  string: TabString,
  frets: number[],
  fingers: number[]
  root: string
}) {
  const frets = range(props.start, props.end).map((i) => {
    const stringPitch = getStringPitch(props.string);
    if (!stringPitch) return [];
    const tone = getTone(props.root, i, stringPitch)
    const index = props.frets.indexOf(i);
    const fretMatch = props.frets.includes(i);
    const finger = props.fingers[index];
    return <span key={i} className={`fret-box fret-${i}`}>
      {fretMatch && <div className={`fret-value tone-${tone}`}>
        {i === 0 ? 0 : finger}
      </div>}
    </span>
  })

  return (
    <div key={props.string} className="fretboard-string">
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
    const fretMatch = props.frets.includes(i);
    return <span key={i} className={`fret-box fret-${i}`} >
      {fretMatch && <div className='fret-value'>
        {i}
      </div>}
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
    return <span key={i} className={`fret fret-${i}`}>
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
  const fretMarkers = [3, 5, 7, 9, 12, 15, 17];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const frame = document.getElementById(props.id);
    const tones = document.querySelectorAll(`#${props.id} .fretboard-strings .fret-value`);
    if (!frame || tones.length === 0) return;

    const frameRect = frame.getBoundingClientRect();
    const center = (frameRect.left + frameRect.right) / 2;
    let toneSum: number = 0;
    tones.forEach((elem) => {
      const elemRect = elem.getBoundingClientRect();
      toneSum += (elemRect.left + elemRect.width / 2);
    })
    const toneCenter = toneSum / tones.length;
    if (!center || !toneCenter) return;

    setOffset(offset + center - toneCenter);
  }, [props.root])

  return (
    <div key={`${props.id}`} id={`${props.id}`} className="fretboard">
      <div style={{ left: offset }}>
        <div className="fretboard-content">
          <Frets
            start={props.start}
            end={props.end}
            fretMarkers={fretMarkers}
            fretDoubleMarkers={[12]}
          />
          <div className="fretboard-strings">
            {tabStrings.map(tabString =>
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
      </div >
    </div >
  );
}
