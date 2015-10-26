import React from 'react';
import mui from 'material-ui';
import EditDocument from './EditDocument.js';
import PreviewDocument from './PreviewDocument.js';

let Tabs = mui.Tabs;
let Tab = mui.Tab;

export default class TabsContainer extends React.Component {
    render() {
        return (
            <div>
                <Tabs valueLink={{value: this.props.state.activePage, requestChange: this._changeTab}}>
                  <Tab label='Edit' value='edit' >
                    <EditDocument markdown={this.props.state.markdown} actions={this.props.actions} />
                  </Tab>
                  <Tab label='Preview' value='preview'>
                    <PreviewDocument markdown={this.props.state.markdown} />
                  </Tab>
                </Tabs>
            </div>
        );
    }

    _changeTab = (page) => {
        this.props.actions.setActivePage(page);
    }
}
