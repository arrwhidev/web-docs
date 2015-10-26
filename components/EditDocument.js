import React from 'react';
import mui from 'material-ui';
import ContentEditable from './ContentEditable.js';
import io from '../io/io.js';

export default class EditDocument extends React.Component {

    constructor() {
        super();
        io.setReadDataCallback(this.networkCallback);
    }

    render() {
        return (
            <div>
                <mui.TextField
                    onChange={this.writeToNetwork}
                    value={this.props.markdown}
                    multiLine={true}
                />
            </div>
        );
    }

    writeToNetwork = (ev) => {
        io.write(ev.target.value);
    }

    networkCallback = (data) => {
        this.props.actions.updateText(data);
    }
}
