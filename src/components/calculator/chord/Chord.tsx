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
    option: ''
  });

  const onChange = (data: IChordParams) => {
    setData(data)
  }

  return (
    <div className="chord">
      <Display
        data={data}
      />
      <Input
        data={data}
        onChange={onChange}
      />
    </div>
  );
}

export default Chord;
