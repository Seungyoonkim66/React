import React, { Component } from 'react';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            //hovered: false,
            span_style: {
                border: '1px #bcbcbc',
                borderRadius: '4px 4px 0 0',
                borderBottom: 'solid #00338d',
                width: '130px',
                float: 'left',
                paddingLeft: 35,
                paddingTop: 9,
                paddingBottom: 5,
                backgroundColor: 'white',
                margin: '0 2px',
            },
            button_style: {
                backgroundColor: 'transparent',
                border: 'none',
                color: '#7f8fa4',
                fontWeight: 550,
                lineHeight: 1.8,
            },
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleHover1 = this.handleHover1.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
    }

    handleClick() {
        this.setState(
            { 
                clicked: !this.state.clicked,
                span_style: {
                    border: '1px #bcbcbc',
                    borderRadius: '4px 4px 0 0',
                    borderBottom: 'solid #00338d',
                    width: '130px',
                    float: 'left',
                    paddingLeft: 35,
                    paddingTop: 9,
                    paddingBottom: 5,
                    backgroundColor: 'white',
                    margin: '0 2px',
                },
                button_style: {
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#00338d',
                    fontWeight: 550,
                    lineHeight: 1.8,
                },

            }
        );
        console.log('clicked:' + this.state.clicked);
    }

    handleHover1() {
        this.setState(
            {
                //hovered: !this.state.hovered,
                span_style: {
                    border: '1px #bcbcbc',
                    borderRadius: '4px 4px 0 0',
                    borderBottom: 'solid #00338d',
                    width: '130px',
                    float: 'left',
                    paddingLeft: 35,
                    paddingTop: 9,
                    paddingBottom: 5,
                    backgroundColor: '#E5EAF3',
                    margin: '0 2px',
                },
                button_style: {
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#00338d',
                    fontWeight: 550,
                    lineHeight: 1.8,
                },
            }
        );
    }

    handleHover2() {
        this.setState(
            {
                //hovered: !this.state.hovered,
                span_style: {
                    border: '1px #bcbcbc',
                    borderRadius: '4px 4px 0 0',
                    borderBottom: 'solid #00338d',
                    width: '130px',
                    float: 'left',
                    paddingLeft: 35,
                    paddingTop: 9,
                    paddingBottom: 5,
                    backgroundColor: 'white',
                    margin: '0 2px',
                },
                button_style: {
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#7f8fa4',
                    fontWeight: 550,
                    lineHeight: 1.8,
                },
            }
        );
    }

    render() {
        return (
            <div>
                <span style={this.state.span_style}>
                    <button
                        style={this.state.button_style}
                        onMouseOver={this.handleHover1}
                        onMouseLeave={this.handleHover2}
                        onClick={this.handleClick}>{this.props.tabname}
                        {this.props.tab.tabName}
                    </button>
                </span>
            </div>
        );
    }
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TabData: [
                {
                    tabName: 'Image-Korean',
                    desc: 'OCR for Image file.'
                },
                {
                    tabName: 'PDF-English',
                    desc: 'OCR for PDF file.'
                },
                {
                    tabName: 'TEXT-English',
                    desc: 'OCR for TEXT file.'
                }
            ]
        };
    }

    render() {
        const mapToComponent = data => {
            return data.map((tab, i) => {
                return (<Tab tab={tab} key={i} />);
            });
        };

        return (
            <div className='nav'>
                {mapToComponent(this.state.TabData)}
            </div>
        );
    }
}

export default Navigation;