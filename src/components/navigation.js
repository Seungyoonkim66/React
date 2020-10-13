import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
        console.log("Navigation-construxtur");
        this.state = {
            clicked: false,
            isHovering: false,
            li_style: {
                border: '1px #bcbcbc',
                borderRadius: '4px 4px 0 0',
                borderBottom: 'solid rgba(153, 173, 209, 4)',
                width: '130px',
                listStyleType: "none",
                float: 'left',
                paddingLeft: 35,
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: 'transparent',
            },

            button_style: {
                backgroundColor: 'transparent',
                border: 'none',
                color: '#7f8fa4',
                fontWeight: 550,
                lineHeight: 1.8,
            },
        }
    }

    render() {
        return (
            <div className="nav">
                <ul>
                    <li style={this.state.li_style}>
                        <button
                            style={this.state.button_style}
                            onClick={console.log('onclick')}>Image - Korean
                        </button>
                    </li>
                    <li style={this.state.li_style}>
                        <button
                            style={this.state.button_style}
                            onClick={console.log('onclick')}>PDF - English
                        </button>
                    </li>
                    <li style={this.state.li_style}>
                        <button
                            style={this.state.button_style}
                            onClick={console.log('onclick')}>TEXT - English
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;