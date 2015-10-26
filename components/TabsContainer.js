import React from 'react';
import mui from 'material-ui';

let RaisedButton = mui.RaisedButton;

export default class TabsContainer extends React.Component {
    render() {
        return (
            <div>
                <RaisedButton id='edit' label="Edit" secondary={true} onClick={this.changeTab} />
                <RaisedButton id='preview' label="Preview" secondary={true} onClick={this.changeTab} />
            </div>
        );
    }

    changeTab = (ev) => {
        this.props.actions.setActivePage(ev.currentTarget.id);
    }
}
