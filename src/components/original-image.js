import React, { Component } from 'react';
// import tempimg from './static/original/회계전표_국내청구서_1.png';
// import DataList from './data';
// import * as DataFunc from './data';

class OriginalImage extends Component {
    constructor(props) {
        super(props);
        console.log('OriginalImage-constructor');
        this.state = {
            list_div_style:{
                border: '1px',
                borderRadius: '9px',
                backgroundColor: 'white',
                padding: '16px',
                margin: '10px',
            },
            lab_style:{
                fontSize: '12px',
                fontWeight: 700,
                color: '#00338d',
                textTransform: 'uppercase',
                marginBottom: '5px',
                backgroundColor: 'white'
            },
            section_style:{
                backgroundColor: 'white',
            }
        }
    }

    render() {
        console.log('OriginalImage-render');
        return (
            <div className="original" style={this.state.list_div_style}>
                <div className="lab" style={this.state.lab_style}>ORIGINAL IMAGE</div>
                <div className="original_img">
                    {/* <img style={{width:"300px"}} src={tempimg} alt="original image"/> */}
                </div>
            </div>
        );
    }
}

export default OriginalImage;