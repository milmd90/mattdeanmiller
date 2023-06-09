import {TabColumn, tabStrings} from './tabs';

function getTabsFromChordTabRow(chordTabArray: TabColumn[]): string {
  const tabObject: any = {};
  tabStrings.forEach((tabString) => {
    tabObject[tabString] = [];
  })
  chordTabArray.forEach((chordTab) => {
    tabStrings.forEach((tabString) => {
      tabObject[tabString].push(chordTab[tabString].fret);
    })
  })

  let tabTxt: string = '';
  tabStrings.forEach((tabString) => {
    tabTxt = tabTxt + `${tabString} |` + tabObject[tabString].join('') + '|\n';
  })

  return tabTxt;
}

export function getTabsFromChordTabArray(chordTabArray: TabColumn[][]): void {

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