import React, { useState } from 'react';
import ColorKey from '../components/calculator/ColorKey';
import Fretboard from '../components/fretboard';
import { transposeScale } from '../helpers/scales';
import { pitchDifference } from '../helpers/pitchTones';

export default function Scales() {
  const [key, setKey] = useState('D');
  const [keyType, setKeyType] = useState('Major');

  function onKeyChange(v: any) {
    setKey(v.target.value);
  }

  function onKeyTypeChange(v: any) {
    setKeyType(v.target.value);
  }

  function getTransposeValue(): number {
    let value = pitchDifference('D', key);
    if (!value) return 0;
    return keyType === 'Minor' ? value + 3 : value;
  }

  return (
    <div id='scales-page' className="container center">
      <h2>Guitar Scale Patterns</h2>
      <div className='column narrow'>
        <div className='item'>
          <h3 id='scale-overview'>
            Overview
          </h3>
          <p>
            Below are 6 common patterns for playing major scales.
            Each colored circle shows the string and fret location of a note in the pattern.
            The color of the circle represents the scale degree of that note (key at the bottom).
            The number on the circle shows the finger used to play that note in the pattern
            (1: Index, 2: Middle, 3: Ring, 4: Pinky, 0: Open).
          </p>
          <p>Select the key for your scale patterns:</p>
          <p>
            <select onChange={onKeyChange} value={key}>
              <option value='Ab'>A♭</option>
              <option value='A'>A</option>
              <option value='A#'>A#</option>
              <option value='Bb'>B♭</option>
              <option value='B'>B</option>
              <option value='C'>C</option>
              <option value='C#'>C#</option>
              <option value='Db'>D♭</option>
              <option value='D'>D</option>
              <option value='D#'>D#</option>
              <option value='Eb'>E♭</option>
              <option value='E'>E</option>
              <option value='F'>F</option>
              <option value='F#'>F#</option>
              <option value='Gb'>G♭</option>
              <option value='G'>G</option>
              <option value='G#'>G#</option>
            </select> &nbsp; Major
            {/* <select onChange={onKeyTypeChange} value={keyType}>
              <option>Major</option>
              <option>Minor</option>
            </select> */}
          </p>
        </div>
        <div className='item'>
          <h3>
            {`${key} ${keyType}`} Scale: C Shape (5, 4)
          </h3>
          <Fretboard
            id='c-shape'
            start={1}
            end={16}
            frets={transposeScale({
              'first': [2, 3, 5],
              'second': [2, 3, 5],
              'third': [2, 4],
              'fourth': [2, 4, 5],
              'fifth': [2, 4, 5],
              'sixth': [2, 3, 5]
            }, getTransposeValue())}
            fingers={{
              'first': [1, 2, 4],
              'second': [1, 2, 4],
              'third': [1, 3],
              'fourth': [1, 3, 4],
              'fifth': [1, 3, 4],
              'sixth': [1, 2, 4]
            }}
            root={key}
          />
        </div>
        <div className='item'>
          <h3>
            {`${key} ${keyType}`} Scale: A Shape (5, 2)
          </h3>
          <Fretboard
            id='a-shape'
            start={1}
            end={16}
            frets={transposeScale({
              'first': [5, 7],
              'second': [5, 7, 8],
              'third': [4, 6, 7],
              'fourth': [4, 5, 7],
              'fifth': [4, 5, 7],
              'sixth': [5, 7]
            }, getTransposeValue())}
            fingers={{
              'first': [1, 3],
              'second': [1, 3, 4],
              'third': [1, 3, 4],
              'fourth': [1, 2, 4],
              'fifth': [1, 2, 4],
              'sixth': [2, 4]
            }}
            root={key}
          />
        </div>
        <div className='item'>
          <h3>
            {`${key} ${keyType}`} Scale: A/G Shape (5, 1)
          </h3>
          <Fretboard
            id='a-g-shape'
            start={1}
            end={16}
            frets={transposeScale({
              'first': [7, 9, 10],
              'second': [7, 8, 10],
              'third': [6, 7, 9],
              'fourth': [5, 7, 9],
              'fifth': [5, 7, 9],
              'sixth': []
            }, getTransposeValue())}
            fingers={{
              'first': [1, 3, 4],
              'second': [1, 2, 4],
              'third': [1, 2, 4],
              'fourth': [1, 2, 4],
              'fifth': [1, 2, 4],
              'sixth': []
            }}
            root={key}
          />
        </div>
        <div className='item'>
          <h3>
            {`${key} ${keyType}`} Scale: G Shape (6, 4)
          </h3>
          <Fretboard
            id='g-shape'
            start={1}
            end={16}
            frets={transposeScale({
              'first': [7, 9, 10],
              'second': [7, 8, 10],
              'third': [6, 7, 9],
              'fourth': [7, 9],
              'fifth': [7, 9, 10],
              'sixth': [7, 9, 10]
            }, getTransposeValue())}
            fingers={{
              'first': [1, 3, 4],
              'second': [1, 2, 4],
              'third': [1, 2, 4],
              'fourth': [1, 3],
              'fifth': [1, 3, 4],
              'sixth': [1, 3, 4]
            }}
            root={key}
          />
        </div>
        <div className='item'>
          <h3>
            {`${key} ${keyType}`} Scale: E Shape (6, 2)
          </h3>
          <Fretboard
            id='e-shape'
            start={1}
            end={16}
            frets={transposeScale({
              'first': [9, 10, 12],
              'second': [10, 12],
              'third': [9, 11, 12],
              'fourth': [9, 11, 12],
              'fifth': [9, 10, 12],
              'sixth': [9, 10, 12]
            }, getTransposeValue())}
            fingers={{
              'first': [1, 2, 4],
              'second': [2, 4],
              'third': [1, 3, 4],
              'fourth': [1, 3, 4],
              'fifth': [1, 2, 4],
              'sixth': [1, 2, 4]
            }}
            root={key}
          />
        </div>
        <div className='item'>
          <h3>
            {`${key} ${keyType}`} Scale: D Shape (6, 1)
          </h3>
          <Fretboard
            id='d-shape'
            start={1}
            end={16}
            frets={transposeScale({
              'first': [12, 14, 15],
              'second': [12, 14, 15],
              'third': [11, 12, 14],
              'fourth': [11, 12, 14],
              'fifth': [10, 12, 14],
              'sixth': [10, 12, 14]
            }, getTransposeValue())}
            fingers={{
              'first': [1, 3, 4],
              'second': [1, 3, 4],
              'third': [1, 2, 4],
              'fourth': [1, 2, 4],
              'fifth': [1, 2, 4],
              'sixth': [1, 2, 4]
            }}
            root={key}
          />
        </div>
        <div className='item'>
          <ColorKey showColors={true} />
        </div>
        <div className='item'>
          <h3 id='scale-names'>
            Pattern Names
          </h3>
          <p>
            There are two ways to refer to each of these patterns.
            The first is by the open chord contained in the pattern.
            The second is by the lowest root string and the finger used to play it.
          </p><p>
            For example, let's consider the pattern labelled C Shape (5, 4).
            Notice how playing a major arpeggio using this pattern resembles an open C?
            Alternatively, we can also refer to the pattern as 5, 4, because we play the bottom root on the A string (5) using our pinky (4) finger.
          </p>
        </div>
        <div className='item'>
          <h3 id='scale-practice'>
            Practicing
          </h3>
          <p>
            Each one of these patterns can be used to play a major scale in any key.
            Use the dropsdown below to practice these patterns in all 12 keys.
            I plan on improving this page by include more detailed instructions for practicing scale patterns.
            If you found this information useful, please send me a message!
          </p>
        </div>
      </div>
    </div>
  );
}