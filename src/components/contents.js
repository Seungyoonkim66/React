import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from "./data.json";

function HandleClick(data_id) {
    console.log(data_id);

    let cur_data_original = data.map((data_id) => {
        return data_id.original;
    });

    let cur_data_extract = data.map((data_id) => {
        return data_id.extract;
    });

    console.log(cur_data_original[data_id - 1]);
    console.log(cur_data_extract[data_id - 1]);

    const original_image_render_data = (
        <div>
            <img style={{ width: '100px' }} src={cur_data_original[data_id - 1]} alt="original_image" />
        </div>
    );

    const extract_image_render_data = (
        <div>
            <img style={{ width: '100px' }} src={cur_data_extract[data_id - 1]} alt="extract_image" />
        </div>
    );

    ReactDOM.render(original_image_render_data, document.getElementById('oiginal_image_render_div'));
    ReactDOM.render(extract_image_render_data, document.getElementById('extract_image_render_div'));
}


class Contents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_div_style: {

            },
            li_style: {
                listStyleType: 'none',
            },
            btn_style: {
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: '12px',
            }
        }
    }

    render() {
        const dataObject = data.map((data, i) => {
            return (
                <div className="contents_list_div" style={this.state.list_div_style}>
                    <button style={this.state.btn_style} onClick={() => { HandleClick(data.id) }}>
                        <li style={this.state.li_style} key={i}>
                            {data.title}
                        </li>
                    </button>
                </div>
            );
        });

        return (dataObject);
    }
}

export default Contents;