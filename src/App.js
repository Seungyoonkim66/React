import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import LeftList from './components/left-list';
import OriginalImage from './components/original-image';
import ExtractImage from './components/extract-image';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App-constructor");
    this.state = {
      title: null
    }
  }

  render() {
    console.log("App-render");
    return (
      <div className="App">
        <Header />
        <Navigation />
        <LeftList />
        <OriginalImage />
        <ExtractImage />
        <Footer />
      </div>
    );
  }
}

export default App;