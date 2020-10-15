import React, { Component } from 'react';
import data from "./data.json";
import LeftList from './left-list';
import OriginalImage from './original-image';
import ExtractImage from './extract-image';

class DataList extends Component {
    constructor(props) {
        super(props);
        console.log('DataList-constructor');
        this.state = {
            div_style: {
                width: 'auto',
                height: 'auto',
                margin: '10px',
                paddingBottom: '6px',
                paddingTop: '6px',
                borderBottom: '1px solid #7f8fa4',
            },
            list_style: {
                margin: '0',
                listStyleType: 'none',
            },
            btn_style: {
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: '12px'
            }
        }
        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClick(data_id) {
        console.log(data_id);

        let cur_data_original = data.map((data_id) => {
            return data_id.original;
        });

        let cur_data_extract = data.map((data_id) => {
            return data_id.extract;
        });

        console.log(cur_data_original[data_id - 1]);
        console.log(cur_data_extract[data_id - 1]);

        return (
            <div>
                <img style={{width: '100px'}} src={cur_data_original[data_id-1]}/>
                <img style={{width: '100px'}} src={cur_data_extract[data_id-1]}/>
            </div>
        );
    }

    render() {

        const dataObject = data.map((data, i) => {
            return (
                <div style={this.state.div_style}>
                    <button style={this.state.btn_style} onClick={() => { this.HandleClick(data.id) }}>
                        <li style={this.state.list_style} key={i}>
                            {data.title}
                        </li>
                    </button>
                    {this.HandleClick(data.id)}
                </div>
            );
        });

        // const originalObject = () => {
        //     return (
        //         <div>
        //             {this.HandleClick[0]}
        //             {cur_data_original[data_id - 1]}
        //         </div>
        //     );
        // };

        return (dataObject);
    }
}


// class DataList extends Component {
//         render() {
//             return ( dataObject );
//         }
// }

// class OriginalImage extends Component {
//     render() {
//         return("original image");
//     }
// }

// class ExtractImage extends Component {
//     render() {
//         return("extract image");
//     }
// }

export default DataList;