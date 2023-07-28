import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHORDS } from '../../../utils/queries';
import {
  IStringData,
  IChordTab,
  emptyTab,
  tabStrings,
  updateChordsWithPosition,
  sortChordsByLowest,
  isValidTab
} from '../../../helpers/common';
import {
  getQualityFromAbbrev
} from '../../../helpers/abbreviations';
import {
  convertPitchToTone,
  pitchDifference
} from '../../../helpers/pitchTones';
import { IChordParams } from './Chord';
import TabDetail from './TabDetail';


function Cell(props: {
  data: IStringData
  showColors: boolean
}): any {
  const { tone, fret } = props.data;
  const className = !tone || !props.showColors ? '' : `tone-${tone}`;

  return (
    <div className={`fret-number ${className}`}>
      {fret}
    </div>
  )
}

function Display(props: {
  data: IChordParams,
  showColors: boolean,
  onChange: (data: IChordTab) => void
}) {
  const {
    root,
    type: abbrev,
    shape,
    position,
    option
  } = props.data;

  const [tab, setTab] = useState<IChordTab>(emptyTab);
  const [showDetail, setShowDetail] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const tone = convertPitchToTone(root);
  const type = getQualityFromAbbrev(abbrev);

  const { loading, data } = useQuery(QUERY_CHORDS, {
    variables: {
      shape,
      type,
    },
  });
  if (loading) {
    return (
      <div className="display">
        <div
          className="tab-row"
        >
          {tabStrings.map((tabString) =>
            <Cell
              key={tabString}
              showColors={props.showColors}
              data={emptyTab[tabString]}
            />
          )}
        </div>
      </div>
    )
  } else {
    console.log('QUERY_CHORDS', {
      data,
      shape,
      type
    })


    if (!tone) {
      return (
        <div className="display">
          <div
            className="tab-row"
          >
            {tabStrings.map((tabString) =>
              <Cell
                key={tabString}
                showColors={props.showColors}
                data={emptyTab[tabString]}
              />
            )}
          </div>
        </div>
      );
    }

    if (!type) {
      return (
        <div className="display">
          <div
            className="tab-row"
          >
            {tabStrings.map((tabString) =>
              <Cell
                key={tabString}
                showColors={props.showColors}
                data={emptyTab[tabString]}
              />
            )}
          </div>
        </div>
      );
    }

    let tabArray: IChordTab[] = updateChordsWithPosition(data.chords, position);
    tabArray = sortChordsByLowest(tabArray);

    const index: number = option % tabArray.length;
    const renderTab = tabArray[index];
    console.log({ renderTab })
    // setTab(tab);
    // props.onChange(tab);
    // setIsValid(isValidTab(tab));
  }

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
        {tabStrings.map((tabString) =>
          <Cell
            key={tabString}
            showColors={props.showColors}
            data={tab[tabString]}
          />
        )}
      </div>
      {/* {isValid && <TabDetail
        tab={tab}
        hide={!showDetail}
      />} */}
    </div>
  );
}

export default Display;
