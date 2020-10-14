import React, { Component } from 'react';
import data from "./data.json";

function HandleClick(data_id){
    console.log("click  " + data_id);
    return data_id;
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
            <button style={btn_style} onClick={() => { HandleClick(data.id) }}>
                <li style={list_style} key={i}>
                    {data.title}
                </li>
            </button>
        </div>
    );
});

class DataList extends Component {

    render() {
        return (dataObject);
    }
}

class OriginalImage extends Component {
    render() {
        return("original image");
    }
}

class ExtractImage extends Component {
    render() {
        return("extract image");
    }
}

export default DataList;

// export default {DataList, OriginalImage, ExtractImage};