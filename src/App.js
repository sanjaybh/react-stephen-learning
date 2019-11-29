import React from 'react';

//import './App.css';

//import CardLayout from './components/comp/CardLayout';
//import Seasons from './components/seasons/Index';
//import Clock from './components/common/Clock';
//import HomePics from './components/pics/HomePics';

//import Videos from './components/videos/AppVideo';
//import SongsApp from './components/songs/SongsApp';

import BlogPosts from './components/blog/blogApp';

function App() {
  return (
    <div className="App">
      <header className="app-header">

        <React.Fragment>
          
          <BlogPosts />    

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
<HomePics />
<Videos />
<SongsApp />
<BlogPosts />
*/