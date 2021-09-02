import React, { Component } from 'react';
import '../css/Spinner.css';

export class Spinner extends Component {
    render() {
        const { givenStyle } = this.props;
        return (
            <div>
                <img
                    src="https://flevix.com/wp-content/uploads/2019/07/Message-Preloader-1.gif"
                    className="img-fluid w-100 mx-auto my-2 spinner"
                    alt=""
                    style={givenStyle}
                />
            </div>
        );
    }
}

export default Spinner;
