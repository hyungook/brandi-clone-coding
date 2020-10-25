import React from 'react';
import './App.css';
import Header from './components/Index__header.js';
import SlideBanner from './components/Slide__banner.js';
import Tab__nav from './components/Tab__nav.js';

class App extends React.Component{
  render() {
    return <div>
      <Header />
      <SlideBanner />
      <Tab__nav />
    </div>
  }
}

export default App;
