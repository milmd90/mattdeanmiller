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
  string: string,
  frets: number[]
}) {
  const frets = range(props.start, props.end).map((i) => {
    return <span className='fret-box'>
      <div className={`fret-value ${props.frets.includes(i) ? `tone-x` : ''}`}>
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
    return <span className='fret-box'>
      <div className='fret-value'>
        {props.frets.includes(i) ? i : ''}
      </div>
    </span>
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
}) {
  const frets = range(props.start, props.end).map((i) => {
    return <span className='fret' />
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
}) {
  return (
    <div className="fretboard">
      <div className="fretboard-content">
        <Frets
          start={props.start}
          end={props.end}
        />
        <div className="fretboard-strings">
          <FretboardString
            start={props.start}
            end={props.end}
            string={'e'}
            frets={props.frets['e']}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'B'}
            frets={props.frets['B']}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'G'}
            frets={props.frets['G']}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'D'}
            frets={props.frets['D']}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'A'}
            frets={props.frets['A']}
          />
          <FretboardString
            start={props.start}
            end={props.end}
            string={'E'}
            frets={props.frets['E']}
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
