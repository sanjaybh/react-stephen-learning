import React from 'react';

import './App.css';

//import CardLayout from './components/comp/CardLayout';
import Seasons from './components/seasons/Index';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <>
          <Seasons />
        </>
      </header>
    </div>
  );
}

export default App;
