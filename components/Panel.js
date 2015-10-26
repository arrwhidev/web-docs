import React from 'react';
import StatusContainer from './StatusContainer.js';
import TabsContainer from './TabsContainer.js';

export default class Panel extends React.Component {

    render() {
        return (
            <div>
                <StatusContainer />
                <TabsContainer actions={this.props.actions} state={this.props.state} />
            </div>
        );
    }
}
