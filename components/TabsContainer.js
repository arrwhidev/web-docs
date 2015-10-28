import React from 'react';
import mui from 'material-ui';
import EditDocument from './EditDocument.js';
import PreviewDocument from './PreviewDocument.js';

let Tabs = mui.Tabs;
let Tab = mui.Tab;

export default class TabsContainer extends React.Component {
    render() {
        return (
            <div className='main-nav'>
                <Tabs valueLink={{value: this.props.state.activePage, requestChange: this._changeTab}} className='tabs'>
                  <Tab label='Edit' value='edit' className='tab'>
                    <mui.Paper zDepth={1} rounded={false} className='tab-paper'>
                        <EditDocument markdown={this.props.state.markdown} actions={this.props.actions} />
                    </mui.Paper>
                  </Tab>
                  <Tab label='Preview' value='preview' className='tab'>
                    <mui.Paper zDepth={1} rounded={false} className='tab-paper'>
                        <PreviewDocument markdown={this.props.state.markdown} />
                    </mui.Paper>
                  </Tab>
                </Tabs>
            </div>
        );
    }

    _changeTab = (page) => {
        this.props.actions.setActivePage(page);
    }
}
