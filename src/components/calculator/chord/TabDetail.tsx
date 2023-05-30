import {
  IChordTab,
  ITabStringValue,
  tabStrings,
  TabString,
  getMinFretValue,
  getMaxFretValue
} from '../../../helpers/tabs';

function TabDetailRow(props: {
  tabString: TabString
  tab: IChordTab
  min: number
  max: number
}) {
  const {tabString, tab, min, max} = props;
  const fretValue = tab[tabString].fret;

  const cells = [];
  cells.push(
    <span 
      key='first'
      className='tab-detail-cell'
    > 
      {tabString}
    </span>
  );
  for (let i = min; i <= max; i++) {
    cells.push(
      <span 
        key={i}
        className='tab-detail-cell'
      > 
        {fretValue === i ? 'X' : ''} 
      </span>
    );
  }
  return (
    <div className={'tab-detail-row'}>
      {cells}
    </div>
  )
}

function FretRow(props: {
  min: number
  max: number
}) {
  const {min, max} = props;
  const cells = [];
  cells.push(
    <span 
      key={'first'}
      className='tab-detail-cell'>
    </span>
  );
  for (let i = min; i <= max; i++) {
    cells.push(
      <span 
        key={i}
        className='tab-detail-cell'
      > 
        {i} 
      </span>
    );
  }
  return (
    <div className={'tab-detail-row'}>
      {cells}
    </div>
  )
}

function TabDetail(props: {
  tab: IChordTab;
  hide?: boolean
}) {
  const { tab, hide } = props;

  let min = getMinFretValue(tab);
  let max = getMaxFretValue(tab);

  if (max <= 4) {
    min = 0;
    max = 4;
  } else if (max - min <= 4) {
    max = min + 4
  }

  return (
    <div className={`tab-detail ${hide ? 'hide' : ''}`}>
      {tabStrings.map((tabString: TabString) => 
        <TabDetailRow 
          key={tabString}
          tabString={tabString}
          tab={tab}
          min={min}
          max={max}
        />
      )}
      <FretRow 
        min={min}
        max={max}
      />
    </div> 
  )
}

export default TabDetail;