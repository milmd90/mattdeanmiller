import React, { useState } from 'react';
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
  showColors: boolean,
  isEditing: boolean,
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
        showColors={props.showColors}
        onChange={props.onChange}
      />
      <Input
        data={data}
        isEditing={props.isEditing}
        onChange={(data) => setData(data)}
      />
    </div>
  );
}

export default Chord;
