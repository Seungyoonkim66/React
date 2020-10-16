import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from "./data.json";
import clipboard from './clipboard.svg';

function Clipboard () {
    console.log("clipboard");
    document.execCommand('copy');
}

function HandleClick(data_id) {
    console.log("file id:"+data_id);

    let cur_data_original = data.map((data_id) => {
        return data_id.original;
    });

    let cur_data_extract = data.map((data_id) => {
        return data_id.extract;
    });

    let cur_data_extract_data = data.map((data_id) => {
        return data_id.extract_data;
    });

    console.log(cur_data_original[data_id - 1]);
    console.log(cur_data_extract[data_id - 1]);
    console.log(cur_data_extract_data[data_id - 1]);

    const img_style = {
        width: '100%',
        marginTop: '10px',
    }

    const original_image_render_data = (
        <div>
            <img style={img_style} src={cur_data_original[data_id - 1]} alt="original_image" />
        </div>
    );

    const extract_image_render_data = (
        <div>
            <img style={img_style} src={cur_data_extract[data_id - 1]} alt="extract_image" />
        </div>
    );


    const extract_data_render_data = (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scop="cols">추출 항목</th>
                        <th scop="cols">추출 값</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" id="총금액">총금액</th>
                        <td>{cur_data_extract_data[data_id - 1].총금액}
                            <img style={{float: "right", margin: "0 10px"}} width="20px"alt="clipboard" src={clipboard}
                                onClick={Clipboard}/>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">지급기일</th>
                        <td>{cur_data_extract_data[data_id - 1].지급기일}</td>
                    </tr>
                    <tr>
                        <th scope="row">지급처</th>
                        <td>{cur_data_extract_data[data_id - 1].지급처}</td>
                    </tr>
                    <tr>
                        <th scope="row">전기일자</th>
                        <td>{cur_data_extract_data[data_id - 1].전기일자}</td>
                    </tr>
                    <tr>
                        <th scope="row">증빙일자</th>
                        <td>{cur_data_extract_data[data_id - 1].증빙일자}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    ReactDOM.render(original_image_render_data, document.getElementById('oiginal_image_render_div'));
    ReactDOM.render(extract_image_render_data, document.getElementById('extract_image_render_div'));
    ReactDOM.render(extract_data_render_data, document.getElementById('extract_data_render_div'));
}


class Contents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_div_style: {
                borderLeft: '3px solid #036',
                borderBottom: '1px outset #036',
                marginTop: '4px',
                marginRight: '10px',
            },
            li_style: {
                listStyleType: 'none',
                padding: '10px 10px',
            },
            btn_style: {
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: '12px',
            }
        }
        this.HandleMouseOn=this.HandleMouseOn.bind(this);
    }

    HandleMouseOn(e) {
        console.log('HandleMouseOn');
    }

    render() {
        const dataObject = data.map((data, i) => {
            return (
                <div style={this.state.list_div_style}>
                    <button style={this.state.btn_style} 
                            onClick={() => { HandleClick(data.id) }}
                            onMouseOver={() => {this.HandleMouseOn()}}>
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