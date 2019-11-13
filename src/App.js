import React from 'react';

import './App.css';

//import CardLayout from './components/comp/CardLayout';
//import Seasons from './components/seasons/Index';
//import Clock from './components/common/Clock';

import HomePics from './components/pics/HomePics';


function App() {
  return (
    <div className="App">
      <header className="app-header">

        <React.Fragment>

          <HomePics />

        </React.Fragment>

      </header>
    </div>
  );
}

export default App;

/*
Learned below components
<CardLayout />
<Seasons />
*/