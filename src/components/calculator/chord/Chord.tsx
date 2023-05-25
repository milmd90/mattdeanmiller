import React, {useState} from 'react';
import Display from './Display';
import Input from './Input';

function Chord() {
  const [chord, setChord] = useState({
    chord: '',
    shape: '',
    position: '',
    option: ''
  });

  const onChange = (data: any) => {
    setChord(data)
  }

  return (
    <div className="chord">
      <Display
        chord={chord}
      />
      <Input
        chord={chord}
        onChange={onChange}
      />
    </div>
  );
}

export default Chord;
