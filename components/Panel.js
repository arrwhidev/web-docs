import React from 'react';
import mui from 'material-ui';
import EditDocument from './EditDocument.js';
import PreviewDocument from './PreviewDocument.js';
import StatusContainer from './StatusContainer.js';
import TabsContainer from './TabsContainer.js';

let ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

export default class Panel extends React.Component {

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext() {
       return {
           muiTheme: ThemeManager.getCurrentTheme()
       };
    }

    render() {
        return (
            <div>
                <StatusContainer />
                <TabsContainer actions={this.props.actions} activePage={this.props.state.activePage} />
                {this.renderDocument()}
            </div>
        );
    }

    renderDocument = () => {
        if(this.props.state.activePage === 'edit') {
            return <EditDocument markdown={this.props.state.markdown} actions={this.props.actions} />
        } else if(this.props.state.activePage === 'preview') {
            return <PreviewDocument markdown={this.props.state.markdown} />
        } else {
            return null;
        }
    }
}
