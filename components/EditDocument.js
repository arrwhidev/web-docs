import React from 'react';
import mui from 'material-ui';
import io from '../io/io.js';
import DiffUtils from '../util/DiffUtils.js';

export default class EditDocument extends React.Component {

    constructor() {
        super();

        // TODO - this is no longer specific to this file, move it to somewhere common.
        // Can then remove the entire constructor.
        io.setReadDataCallback((diffObj) => {
            this.props.actions.updateText(diffObj);
        });
    }

    render() {
        return (
            <mui.TextField
                onChange={this.writeToNetwork}
                value={this.props.markdown}
                multiLine={true}
                hintText='Write some markdown...'
                className='edit-text'
            />
        );
    }

    writeToNetwork = (ev) => {
        const diffObj = DiffUtils.calculateDiff(this.props.markdown, ev.target.value);
        io.write(diffObj);
    }
}
