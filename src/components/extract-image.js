import React, { Component } from 'react';

class ExtractImage extends Component {
    constructor(props) {
        super(props);
        console.log('ExtractImage-constructor');
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
        console.log('ExtractImage-render');
        return (
            <div className="extract" style={this.state.list_div_style}>
                <div className="lab" style={this.state.lab_style}>EXTRACT IMAGE</div>
            </div>
        );
    }
}

export default ExtractImage;