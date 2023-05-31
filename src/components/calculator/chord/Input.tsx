import React from "react";
import {IChordParams} from '../chord/Chord'

function Input(props: {
  data: IChordParams,
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
      option: 0,
    });
  }
  const onChangeShape = (e: any) => {
    const shape: string = e.target.value as string;
    onChange({
      root,
      type,
      shape: shape.toUpperCase(),
      position,
      option: 0,
    });
  }
  const onChangePosition = (e: any) => {
    onChange({
      root,
      type,
      shape,
      position: e.target.value,
      option: 0,
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
  
  return (
    <div className="input input-row">
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
        className="option-button"
        onClick={onChangeOption}
      />
    </div>
  )
}

export default Input;
