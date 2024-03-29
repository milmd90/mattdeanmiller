import React, { useState } from 'react';
import Display from './Display';
import Input from './Input';
import { IChordTab } from '../../../helpers/common';

export interface IChordParams {
  root: string,
  type: string,
  shape: string,
  position: string,
  option: number,
  voicing: number,
}

function Chord(props: {
  showColors: boolean,
  isEditing: boolean,
  onChange: (data: IChordTab) => void
}) {
  const [data, setData] = useState<IChordParams>({
    root: '',
    type: '',
    shape: '',
    position: '',
    option: 0,
    voicing: 0,
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
