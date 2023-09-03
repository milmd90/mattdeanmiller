function FretboardString(props: {
  start: number,
  end: number,
  string: string,
  frets: number[]
}) {
  function range(min: number, max: number) {
    var len = max - min + 1;
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr[i] = min + i;
    }
    return arr;
  }

  const frets = range(props.start, props.end).map((i) => {
    return <span className='fret-box'>
      {props.frets.includes(i) ? i : ''}
    </span>
  })

  return (
    <div className="fretboard-string">
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
  );
}
