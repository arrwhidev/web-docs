import React from 'react';
import io from '../io/io.js';
import Document from './Document.js';

export default class DocumentContainer extends React.Component {

    state = {};

    render() {
        return (
            <Document handleTextChange={this._handleTextChange} text={this.state.text} />
        );
    }

    constructor() {
        super();
        io.setReadDataCallback((data) => {
            this.setState(
                {text: data}
            );
        });
    }

    _handleTextChange = (ev) => {
        io.write(ev.target.value);
    }
}
