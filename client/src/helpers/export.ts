import {TabValue[], stringToNote, tabStrings} from '../helpers/common';

function getTabsFromChordTabRow(chordTabArray: TabValue[][], includeSpaces=true ): string {
  const tabObject: any = {};
  tabStrings.forEach((tabString) => {
    tabObject[tabString] = [];
  })
  chordTabArray.forEach((chordTab) => {
    tabStrings.forEach((tabString) => {
      const fretValue = chordTab[tabString].fret;
      let cellValue = fretValue === null ? '-' : `${fretValue}`;
      cellValue = includeSpaces && cellValue.length === 1 ? cellValue + ' ' : cellValue;
      tabObject[tabString].push(cellValue);
    })
  })

  let tabTxt: string = '';
  tabStrings.forEach((tabString) => {
    const stringNote = stringToNote(tabString);
    tabTxt = tabTxt + `${stringNote} | ` + tabObject[tabString].join('') + '|\n';
  })

  return tabTxt;
}

export function getTabsFromChordTabArray(chordTabArray: TabValue[][][]): void {

  let tabTxt: string = '';
  chordTabArray.forEach((chordRow) => {
    tabTxt += getTabsFromChordTabRow(chordRow)+ '\n';;
  })

  const blob = new Blob([tabTxt], { type: "text/plain" });
  const filename = 'tab.txt'
  const elem = window.document.createElement('a');
  elem.href = window.URL.createObjectURL(blob);
  elem.download = filename;        
  document.body.appendChild(elem);
  elem.click();        
  document.body.removeChild(elem);
}