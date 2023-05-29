import React, {useState} from 'react';
import Display from './Display';
import Input from './Input';

export interface IChordParams {
  root: string,
  type: string,
  shape: string,
  position: string,
  option: number
}

function Chord() {
  const [data, setData] = useState<IChordParams>({
    root: '',
    type: '',
    shape: '',
    position: '',
    option: 0
  });

  return (
    <div className="chord">
      <Display
        data={data}
      />
      <Input
        data={data}
        onChange={(data)=>setData(data)}
      />
    </div>
  );
}

export default Chord;
