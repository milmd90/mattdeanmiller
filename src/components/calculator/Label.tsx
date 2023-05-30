import React from 'react';
import {
  tabStrings
} from '../../helpers/tabs';

function Label() {
  return (
    <div className='label'>
      <div className='tab-row'>
        {tabStrings.map((tabString) => 
          <div key={tabString}>
            {tabString} |
          </div>
        )}
      </div>
      <div className='input-row'>
        <div>
          root
        </div>
        <div>
          type
        </div>
        <div>
          shape
        </div>
        <div>
          position
        </div>
        <div>
          option
        </div>
      </div>
    </div>
  );
}

export default Label;
