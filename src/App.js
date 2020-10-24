import React from 'react';
import './App.css';
import Header from './components/Index__header.js';
import SlideBanner from './components/Slide__banner.js';

class App extends React.Component{
  render() {
    return <div>
      <Header />
      <SlideBanner />
    </div>
  }
}

export default App;
