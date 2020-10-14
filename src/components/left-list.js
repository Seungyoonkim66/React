import React, { Component } from 'react';
import Data from './data';

class LeftList extends Component {
    constructor(props) {
        super(props);
        console.log("LeftList-constructor");

        this.state = {
            list_style: {
                display: 'flex',
                flexDirection: 'column',
                margin: 0,
            },
            list_div_style: {
                border: '1px',
                borderRadius: '9px',
                backgroundColor: 'white',
                padding: '16px',
                margin: '10px',
            },
            lab_style: {
                fontSize: '12px',
                fontWeight: 700,
                color: '#00338d',
                textTransform: 'uppercase',
                marginBottom: '5px',
                backgroundColor: 'white'
            },
            section_style: {
                backgroundColor: 'white',
                height: '200px',
                overflow:'auto',
                padding: 0,
                margin: 0,
            }
        }
    }

    render() {
        console.log('LeftList-render');
        return (
            <div className="list" style={this.state.list_style}>
                <div id="image" style={this.state.list_div_style}>
                    <div className="lab" style={this.state.lab_style}>IMAGES</div>
                    <section id="image_list" style={this.state.section_style}>
                        <Data/>
                    </section>
                </div>
                <div id="data" style={this.state.list_div_style}>
                    <div className="lab" style={this.state.lab_style}>OCR DATA</div>
                    <section id="ocr_data" style={this.state.section_style}>ocr data</section>
                </div>
            </div>
        );
    }
}

export default LeftList;