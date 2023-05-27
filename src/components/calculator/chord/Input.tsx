import React, { useState } from "react";
import {
  IChordParams
} from '../chord/Chord'

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

  const onChangeChord = (e: any) => {
    onChange({
      root: e.target.value,
      type,
      shape,
      position,
      option
    });
  }
  const onChangeType = (e: any) => {
    onChange({
      root,
      type: e.target.value,
      shape,
      position,
      option,
    });
  }
  const onChangeShape = (e: any) => {
    onChange({
      root,
      type,
      shape: e.target.value,
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
      option: e.target.value,
    });
  }
  
  return (
    <div className="input">
      <input 
        value={root} 
        onChange={onChangeChord}
      />
      <input 
        value={type} 
        onChange={onChangeType}
      />
      <input 
        value={shape} 
        onChange={onChangeShape}
      />
      <input 
        value={position} 
        onChange={onChangePosition}
      />
      <input 
        value={option} 
        onChange={onChangeOption}
      />
    </div>
  )
}

export default Input;
