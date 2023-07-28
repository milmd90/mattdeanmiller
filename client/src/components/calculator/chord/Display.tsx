import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHORDS } from '../../../utils/queries';
import {
  getMinFretValue
} from '../../../utils/tabs';
import {
  getQualityFromAbbrev
} from '../../../utils/abbreviations';
import {
  convertPitchToTone,
  pitchDifference
} from '../../../utils/pitchTones';
import { IChordParams } from './Chord';
import TabDetail from './TabDetail';

type ChordTabValue = number | 'X';
interface IChordData {
  "shape": any,
  "type": any,
  "option": any,
  "fret-6": ChordTabValue,
  "fret-5": ChordTabValue,
  "fret-4": ChordTabValue,
  "fret-3": ChordTabValue,
  "fret-2": ChordTabValue,
  "fret-1": ChordTabValue,
  "tone-6": ChordTabValue,
  "tone-5": ChordTabValue,
  "tone-4": ChordTabValue,
  "tone-3": ChordTabValue,
  "tone-2": ChordTabValue,
  "tone-1": ChordTabValue,
};

interface IShapeOptions {
  "C"?: IChordData[],
  "A"?: IChordData[],
  "G"?: IChordData[],
  "E"?: IChordData[],
  "D"?: IChordData[]
}
type Shape = keyof IShapeOptions;
const shapes: Shape[] = ["C", "A", "G", "E", "D"];

interface IChordDict {
  "6"?: IShapeOptions,
  "69"?: IShapeOptions,
  "7#9"?: IShapeOptions,
  "7b9"?: IShapeOptions,
  "diminished"?: IShapeOptions,
  "dominate 7th"?: IShapeOptions,
  "dominate 9th"?: IShapeOptions,
  "half diminished"?: IShapeOptions,
  "major"?: IShapeOptions,
  "major 7th"?: IShapeOptions,
  "minor"?: IShapeOptions,
  "minor 7th"?: IShapeOptions,
  "minor 9th"?: IShapeOptions,
}
export type Quality = keyof IChordDict;

interface IChordTabStringData {
  "fret": ChordTabValue,
  "tone": ChordTabValue
}
interface IChordTab {
  "e": IChordTabStringData
  "B": IChordTabStringData
  "G": IChordTabStringData
  "D": IChordTabStringData
  "A": IChordTabStringData
  "E": IChordTabStringData
}

type EmptyTabValue = '-';
interface IEmptyTabStringData {
  "fret": EmptyTabValue,
  "tone": EmptyTabValue
}
interface IEmptyTab {
  "e": IEmptyTabStringData
  "B": IEmptyTabStringData
  "G": IEmptyTabStringData
  "D": IEmptyTabStringData
  "A": IEmptyTabStringData
  "E": IEmptyTabStringData
}

export type TabValue = ChordTabValue | EmptyTabValue;
export type TabStringData = IChordTabStringData | IEmptyTabStringData;
export type TabColumn = IChordTab | IEmptyTab;

export type TabString = keyof TabColumn;
export const tabStrings: TabString[] = ['e', 'B', 'G', 'D', 'A', 'E'];


function convertChordsToTabs(chords: IChordData[], root: string): TabColumn[] {
  function getFretValue(input: ChordTabValue, offset: number | undefined): ChordTabValue {
    if (input === 'X') return input;
    if (offset) return input + offset;
    return input;
  }

  function getToneValue(input: ChordTabValue): ChordTabValue {
    if (input === 'X') return input;
    return input;
  }

  return chords.map((chord) => {
    const offset = pitchDifference(chord.shape, root);
    return {
      "e": {
        'fret': getFretValue(chord['fret-6'], offset),
        'tone': getToneValue(chord['tone-6'])
      },
      "B": {
        'fret': getFretValue(chord['fret-5'], offset),
        'tone': getToneValue(chord['tone-5'])
      },
      "G": {
        'fret': getFretValue(chord['fret-4'], offset),
        'tone': getToneValue(chord['tone-4'])
      },
      "D": {
        'fret': getFretValue(chord['fret-3'], offset),
        'tone': getToneValue(chord['tone-3'])
      },
      "A": {
        'fret': getFretValue(chord['fret-2'], offset),
        'tone': getToneValue(chord['tone-2'])
      },
      "E": {
        'fret': getFretValue(chord['fret-1'], offset),
        'tone': getToneValue(chord['tone-1'])
      },
    };
  })
}

function updateChordsWithPosition(tabArray: TabColumn[], position: string): TabColumn[] {
  let numPos: number = parseInt(position);
  if (isNaN(numPos)) numPos = 0;

  return tabArray.map((tab) => {
    let minFret = getMinFretValue(tab);
    if (typeof minFret !== 'number') return tab;

    while (minFret < numPos) {
      for (let s of tabStrings) {
        const f = tab[s].fret;
        if (typeof f === 'number') {
          tab[s].fret = f + 12;
        }
      }
      minFret = getMinFretValue(tab);
      if (typeof minFret !== 'number') return tab;
    }
    return tab;
  })
}

function sortChordsByLowest(tabArray: TabColumn[]): TabColumn[] {
  return tabArray.sort((a: TabColumn, b: TabColumn) => {
    const minA = getMinFretValue(a);
    const minB = getMinFretValue(b);
    if (
      minA === undefined ||
      minB === undefined
    ) return 0;
    return minA - minB;
  });
}

export function isValidTab(tab: TabColumn) {
  for (let s of tabStrings) {
    const f = tab[s].fret;
    if (typeof f === 'number') {
      return true
    }
  }
  return false;
}

// return TabColumn
export function generateTabs(tabData: IChordParams): void {
  const {
    root,
    type: abbrev,
    shape,
    position,
    option
  } = tabData;

  const emptyTab: IEmptyTab = {
    "e": {
      fret: '-',
      tone: '-'
    },
    "B": {
      fret: '-',
      tone: '-'
    },
    "G": {
      fret: '-',
      tone: '-'
    },
    "D": {
      fret: '-',
      tone: '-'
    },
    "A": {
      fret: '-',
      tone: '-'
    },
    "E": {
      fret: '-',
      tone: '-'
    },
  }

  // const tone = convertPitchToTone(root);
  // const type = getQualityFromAbbrev(abbrev);
  // if (!tone || !type) {
  //   return emptyTab;
  // }

  // let tabArray: TabColumn[] = convertChordsToTabs(chordArray, root);
  // tabArray = updateChordsWithPosition(tabArray, position);
  // tabArray = sortChordsByLowest(tabArray);

  // const index: number = option % tabArray.length;
  // return tabArray[index];
}





function Cell(props: {
  data: TabStringData
  showColors: boolean
}): any {
  const { tone, fret } = props.data;
  const className = tone === 'X' || !props.showColors ? '' : `tone-${tone}`;

  return (
    <div className={`fret-number ${className}`}>
      {fret}
    </div>
  )
}

function Display(props: {
  data: IChordParams,
  showColors: boolean,
  onChange: (data: TabColumn) => void
}) {
  // const tab = generateTabs(props.data);
  // props.onChange(tab);
  // const isValid = isValidTab(tab);
  const [showDetail, setShowDetail] = useState(false);
  const [tab, setTab] = useState({});
  const [isValid, setIsValid] = useState(false);

  const { loading, data } = useQuery(QUERY_CHORDS, {
    // pass URL parameter
    variables: {
      shape: props.data.shape,
      type: props.data.type,
    },
  });
  console.log('QUERY_CHORDS', data)


  const setDetailPosition = (e: any) => {
    const details = Array.from(document.getElementsByClassName('tab-detail') as HTMLCollectionOf<HTMLElement>)
    details.forEach((detail) => {
      detail.style.left = e.pageX + 20 + 'px';
      detail.style.top = e.pageY + 20 + 'px';
    });
  }

  document.addEventListener('mousemove', setDetailPosition);

  return (
    <div className="display">
      <div
        className="tab-row"
        onMouseOver={(e) => {
          setShowDetail(true);
          setDetailPosition(e);
        }}
        onMouseOut={() => setShowDetail(false)}
      >
        {/* {tabStrings.map((tabString) =>
          <Cell
            key={tabString}
            showColors={props.showColors}
            data={tab[tabString]}
          />
        )} */}
      </div>
      {/* {isValid && <TabDetail
        tab={tab}
        hide={!showDetail}
      />} */}
    </div>
  );
}

export default Display;
