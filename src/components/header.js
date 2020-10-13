import React, { Component } from 'react';
import logo from './KPMG_logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        console.log('Header-constructor');
        this.state = {
            header_full_style: {
                backgroundColor: 'white',
                margin: 0,
                padding: 10,
                borderBottom: 'solid',
                borderImage: 'linear-gradient(to bottom,#00338d 20%,#E5EAF4 80%)',
                borderImageSlice: 1,
                borderWidth: '10px',
            },
            logo_img_style: {
                width: '90px',
                backgroundColor: 'white',
                margin: 0,
                padding: 0,
                float: 'left'
            },
            logo_text_style: {
                paddingTop: '20px',
                backgroundColor: 'transparent',
            },
            p1_style: {
                backgroundColor: 'transparent',
                margin: '0 10px',
                color: '#00338d',
                fontWeight: 700,
                fontSize: '12px',
                float: 'left'
            },
            p2_style: {
                backgroundColor: 'transparent',
                color: '#7f8fa4',
                fontWeight: 600,
                fontSize: '12px',
                float: 'left',
                margin: '0px',
            }
        }
    }

    render() {
        console.log('Header-render');
        return (
            <div className="header" style={this.state.header_full_style}>
                <div className="logo">
                    <img style={this.state.logo_img_style} src={logo} alt="logo" />
                </div>
                <div className="logotext" style={this.state.logo_text_style}>
                    <p style={this.state.p1_style}>LIGHTHOUSETEST KOREA</p>
                    <p style={this.state.p2_style}> | OCR Digitalization</p>
                </div>
            </div>
        );
    }
}

export default Header;