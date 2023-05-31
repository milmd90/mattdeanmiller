import {TabColumn, tabStrings} from './tabs';

export function getTabsFromChordTabArray(chordTabArray: TabColumn[]): void {
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

  const blob = new Blob([tabTxt], { type: "text/plain" });
  const filename = 'tab.txt'
  const elem = window.document.createElement('a');
  elem.href = window.URL.createObjectURL(blob);
  elem.download = filename;        
  document.body.appendChild(elem);
  elem.click();        
  document.body.removeChild(elem);
}