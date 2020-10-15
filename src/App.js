import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import LeftList from './components/left-list';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App-constructor");
    this.state = {
      title: null,
      label_style:{
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

          <div className="contents_div">
            <div className="label">IMAGES</div>
            <section id="image_list" style={this.state.section_style}>
              <LeftList />
            </section>
          </div>

          <div className="contents_div">
            <div className="label">ORIGINAL IMAGE</div>
            <div id="oiginal_image_render_div"></div>
          </div>

          <div className="contents_div">
            <div className="label">EXTRACT IMAGE</div>
            <div className="extract" id="extract_image_render_div"></div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;