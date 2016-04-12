import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Paper from 'material-ui/lib/paper';
import EditDocument from '../EditDocument';
import PreviewDocument from '../PreviewDocument';

export default ({ activePage, markdown, html, writeToNetwork }) => (
    <div className='main-nav'>
        <Tabs className='tabs'>
            <Tab label='Edit' className='tab'>
                <Paper zDepth={1} rounded={false} className='tab-paper'>
                    <EditDocument markdown={markdown} writeToNetwork={writeToNetwork} />
                </Paper>
            </Tab>
            <Tab label='Preview' className='tab'>
                <Paper zDepth={1} rounded={false} className='tab-paper'>
                    <PreviewDocument html={html} />
                </Paper>
            </Tab>
        </Tabs>
    </div>
);
