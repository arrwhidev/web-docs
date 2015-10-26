import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Panel from './Panel.js';
import * as Actions from '../actions/Actions.js';

class App extends React.Component {
    render() {
        return (
            <Panel actions={this.props.actions} state={this.props.state} />
        );
    }
}

function mapStateToProps(state) {
    return { state: state.reducers };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
