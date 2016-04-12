import React from 'react';
import StatusContainer from './Status/StatusContainer';
import TabsContainer from './Tabs/TabsContainer';

export default () => (
    <div className='main-panel'>
        <h1 className='title'>Markdown Live Editor</h1>
        <StatusContainer />
        <TabsContainer />
    </div>
);
