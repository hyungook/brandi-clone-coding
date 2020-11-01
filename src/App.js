import React from 'react';
import './App.css';
import Header from './components/Index__header.js';
import SlideBanner from './components/Slide__banner.js';
import Tab__nav from './components/Tab__nav.js';
import Item__api from './components/Item__api.js';
import Footer from './components/Footer.js';

class App extends React.Component{
  render() {
    return <div>
      <Header />
      <SlideBanner />
      <Item__api />
      <Tab__nav />
      <Footer />
    </div>
  }
}

export default App;
