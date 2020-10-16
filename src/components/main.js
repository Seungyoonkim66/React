import React, { Component } from 'react';
import LeftList from './left-list';
import OriginalImage from './original-image';
import ExtractImage from './extract-image';

class Main extends Component {
    render() {
        return (
            <div className="contents">
                <div className="left">
                    <div className="contents_div">
                        <div className="label">IMAGES</div>
                        <section id="image_list" style={{ overflow: 'auto', height: '250px', paddingTop: '10px' }}>
                            <LeftList />
                        </section>
                    </div>
                    <div className="contents_div">
                        <div className="label">OCR DATA</div>
                        <div className="extract_data" id="extract_data_render_div" style={{ overflow: 'auto', height: '300px' }}></div>
                    </div>
                </div>
                <OriginalImage />
                <ExtractImage />
            </div>
        );
    }
}

export default Main;