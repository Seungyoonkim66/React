import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import LeftList from './components/left-list';
import OriginalImage from './components/original-image';
import ExtractImage from './components/extract-image';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App-constructor");
    this.state = {
      title: null,
      label_style: {
        fontSize: '12px',
        fontWeight: 700,
        color: '#00338d',
        textTransform: 'uppercase',
        marginBottom: '5px',
        backgroundColor: 'white'
      },
    }
  }

  render() {
    console.log("App-render");
    return (
      <div className="App">
        <Header />
        <Navigation />
        <div className="contents">
          <div className="left">
            <div className="contents_div">
              <div className="label">IMAGES</div>
              <section id="image_list" style={{ overflow: 'auto', height: '250px', paddingTop: '10px' }}>
                <LeftList />
              </section>
            </div>
            <div className="contents_div">
              <div className="label">OCR DATA</div>
              <div className="extract_data" id="extract_data_render_div" style={{ overflow: 'auto', height: '300px' }}></div>
            </div>
          </div>
          <OriginalImage/>
          <ExtractImage/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;