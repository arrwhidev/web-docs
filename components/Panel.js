import React from 'react';
import StatusContainer from './StatusContainer.js';
import TabsContainer from './TabsContainer.js';

export default class Panel extends React.Component {

    render() {
        return (
            <div className='main-panel'>
                <h1 className='title'>Markdown Live Editor</h1>
                <TabsContainer actions={this.props.actions} state={this.props.state} />
                <StatusContainer />
            </div>
        );
    }
}
