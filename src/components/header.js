import React, { Component } from 'react';
import logo from './KPMG_logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header_full_style: {
                backgroundColor: 'white',
                margin: 0,
                paddingTop: 30,
                paddingLeft: 20,
                paddingBottom: 15,
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
        return (
            <div className="header" style={this.state.header_full_style}>
                <div className="logo">
                    <a href="http://localhost:3000/"><img style={this.state.logo_img_style} src={logo} alt="logo" /></a>
                </div>
                <div className="logotext" style={this.state.logo_text_style}>
                    <a href="https://home.kpmg/kr/ko/home.html"><p style={this.state.p1_style}>LIGHTHOUSETEST KOREA</p></a>
                    <a href="http://localhost:3000/"><p style={this.state.p2_style}> | OCR Digitalization</p></a>
                </div>
            </div>
        );
    }
}

export default Header;