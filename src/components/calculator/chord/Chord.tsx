import React, {useState} from 'react';
import Display from './Display';
import Input from './Input';

export interface IChordParams {
  root: string,
  type: string,
  shape: string,
  position: string,
  option: string
}

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
