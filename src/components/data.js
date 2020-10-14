import React, { Component } from 'react';
import data from "./data.json";

function HandleClick(){
    console.log("click");
}

const list_style = {
    margin: '0',
    paddingBottom: '6px',
    paddingTop: '6px',
    borderBottom: '1px solid #7f8fa4',
    
};

const div_style = {
    width: 'auto',
    height: 'auto',
    margin: 0,
}

const btn_style = {
    border: 'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontSize: '12px'
}

const dataObject = data.map((data, i) => {

    return (
        <div style={div_style}>
            <button style={btn_style} onClick={HandleClick}>
                <li style={list_style} key={i}>
                    {data.title}
                </li>
            </button>
        </div>
    );
});

class Data extends Component {

    render() {
        return (dataObject);
    }
}

export default Data;