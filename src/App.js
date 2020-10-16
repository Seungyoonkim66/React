import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Main from './components/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;