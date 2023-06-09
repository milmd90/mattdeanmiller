import React from 'react';
import './App.css';
import Header from './Header';
import Calculator from './calculator/Calculator';

function App() {
  return (
    <div id="app">
      <Header title="Tabulator" />
      <Calculator />
    </div>
  );
}

export default App;
