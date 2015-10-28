import React from 'react';
import mui from 'material-ui';
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
                    hintText='Write some markdown...'
                    className='edit-text'
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
