import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footer_style: {
                padding: '4px 12px',
                backgroundColor: 'white',
                fontSize: '11px',
            }
        }
    }

    render() {
        return (
            <div className="footer" style={this.state.footer_style}>
                &copy; copyright
            </div>
        );
    }
}

export default Footer;