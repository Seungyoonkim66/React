import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footer_style: {
                padding: '20px',
                backgroundColor: 'white',
                fontSize: '13px',
                color: 'gray',
                height: '100%',
                marginBottom: 0,
            }
        }
    }

    render() {
        return (
            <div className="footer" style={this.state.footer_style}>
                <p>&copy; 2020 KPMG Samjong Accounting Corp., a Korea Limited Liability Company and a member firm of the KPMG global organization of independent member firms affiliated with KPMG International Limited, a private English company limited by guarantee. All rights reserved.</p>
                <p>For more detail about the structure of the KPMG global organization please visit <a href="https://home.kpmg/kr/ko/home.html">https://home.kpmg/governance</a>.</p>
            </div>
        );
    }
}

export default Footer;