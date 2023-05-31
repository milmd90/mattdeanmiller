import React, {useState} from 'react';
import Display from './Display';
import Input from './Input';
import { TabColumn } from '../../../helpers/tabs';

export interface IChordParams {
  root: string,
  type: string,
  shape: string,
  position: string,
  option: number
}

function Chord(props: {
  onChange: (data: TabColumn) => void
}) {
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
        onChange={props.onChange}
      />
      <Input
        data={data}
        onChange={(data)=>setData(data)}
      />
    </div>
  );
}

export default Chord;
