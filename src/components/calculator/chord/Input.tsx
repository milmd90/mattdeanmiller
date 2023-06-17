import React, { useState } from "react";
import { IChordParams } from '../chord/Chord'

const getSymbol = (note: number) => {
  switch (note) {
    case 1:
      return '♩';
    case .5:
      return '♩';
    case .25:
      return '♩';
    case .125:
      return '♩';
    default:
      return null;
  }
}

function Rhythm(props: {
  duration: number,
  showRhythm: boolean,
  onChangeRhythm: (duration: number) => void,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdpwn = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  if (!props.showRhythm) return null;

  return (
    <div className='dropdown'>
      <button onClick={toggleDropdpwn} className="dropdown-button">
        {getSymbol(props.duration)}
      </button>
      <div className={`dropdown-content ${isDropdownOpen ? 'open' : 'closed'}`}>
        <li onClick={() => props.onChangeRhythm(1)}>Whole note</li>
        <li onClick={() => props.onChangeRhythm(.5)}>Half note</li>
        <li onClick={() => props.onChangeRhythm(.25)}>Quarter note</li>
        <li onClick={() => props.onChangeRhythm(.125)}>Eighth note</li>
      </div>
    </div >
  )
}

function Input(props: {
  data: IChordParams,
  isEditing: boolean,
  onChange: (data: IChordParams) => void,
  showRhythm: boolean,
  onChangeRhythm: (rhythm: number) => void,
}) {
  const { data, onChange, onChangeRhythm } = props;
  const {
    root,
    type,
    shape,
    position,
    option,
    duration
  } = data;

  const onChangeRoot = (e: any) => {
    let root: string = e.target.value as string;
    root = root.charAt(0).toUpperCase() + root.slice(1)
    onChange({
      root: root,
      type,
      shape,
      position,
      option,
      duration
    });
  }
  const onChangeQuality = (e: any) => {
    onChange({
      root,
      type: e.target.value,
      shape,
      position,
      option: 0,
      duration,
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
      duration
    });
  }
  const onChangePosition = (e: any) => {
    onChange({
      root,
      type,
      shape,
      position: e.target.value,
      option: 0,
      duration
    });
  }
  const onChangeOption = (e: any) => {
    onChange({
      root,
      type,
      shape,
      position,
      option: option + 1,
      duration
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
      />
      <Rhythm
        duration={duration}
        showRhythm={props.showRhythm}
        onChangeRhythm={onChangeRhythm}
      ></Rhythm>
    </div>
  )
}

export default Input;
