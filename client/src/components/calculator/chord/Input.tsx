import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';
import { IChordParams } from '../chord/Chord';

function Input(props: {
  data: IChordParams,
  isEditing: boolean,
  onChange: (O: IChordParams) => void
}) {
  const { data, onChange } = props;
  const {
    root,
    type,
    shape,
    position,
    option
  } = data;

  const onChangeRoot = (e: any) => {
    let root: string = e.target.value as string;
    root = root.charAt(0).toUpperCase() + root.slice(1)
    onChange({
      root: root,
      type,
      shape,
      position,
      option
    });
  }
  const onChangeQuality = (e: any) => {
    onChange({
      root,
      type: e.target.value,
      shape,
      position,
      option,
    });
  }
  const onChangeShape = (e: any) => {
    const shape: string = e.target.value as string;
    onChange({
      root,
      type,
      shape: shape.toUpperCase(),
      position,
      option,
    });
  }
  const onChangePosition = (e: any) => {
    onChange({
      root,
      type,
      shape,
      position: e.target.value,
      option,
    });
  }
  const onChangeOption = (e: any) => {
    onChange({
      root,
      type,
      shape,
      position,
      option: option + 1,
    });
  }

  if (!props.isEditing) return null;

  return (
    <div className="input-row">
      <input
        value={root}
        onChange={onChangeRoot}
      />
      <input
        value={type}
        onChange={onChangeQuality}
      />
      <input
        value={shape}
        onChange={onChangeShape}
      />
      <input
        value={position}
        onChange={onChangePosition}
      />
      <button
        onClick={onChangeOption}
      >
        <FontAwesomeIcon className='icon' icon={faArrowsSpin} size='lg' />
      </button>
    </div>
  )
}

export default Input;
