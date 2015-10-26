import React from 'react';
import mui from 'material-ui';
import DocumentContainer from './DocumentContainer.js';
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
                <TabsContainer />
                <DocumentContainer />
            </div>
        );
    }
}
