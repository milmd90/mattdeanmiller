import React, { useState } from "react";

function Input(props: any) {
  const { chord: chordData, onChange } = props;
  const {
    chord,
    shape,
    position,
    option
  } = chordData;

  const onChangeChord = (e: any) => {
    onChange({
      chord: e.target.value,
      shape,
      position,
      option
    });
  }
  const onChangeShape = (e: any) => {
    onChange({
      chord,
      shape: e.target.value,
      position,
      option,
    });
  }
  const onChangePosition = (e: any) => {
    onChange({
      chord,
      shape,
      position: e.target.value,
      option,
    });
  }
  const onChangeOption = (e: any) => {
    onChange({
      chord,
      shape,
      position,
      optione: e.target.value,
    });
  }
  
  return (
    <div className="input">
      <input 
        value={chord} 
        onChange={onChangeChord}
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
