import React, {useState} from 'react';
import Display from './Display';
import Input from './Input';
import { IChordParams } from '../../../helpers/tabs';

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
