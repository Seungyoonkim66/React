import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        // console.log('Footer-constructor');
        this.state = {
            footer_style: {
                padding: '4px 12px',
                backgroundColor: 'white',
                fontSize: '11px',
            }
        }
    }

    render() {
        // console.log('Footer-render');
        return (
            <div className="footer" style={this.state.footer_style}>
                copyright
            </div>
        );
    }
}

export default Footer;