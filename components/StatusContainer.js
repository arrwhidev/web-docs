import React from 'react';
import io from '../io/io.js';
import Status from './Status.js';

export default class StatusContainer extends React.Component {

    state = {};

    constructor() {
        super();
        io.setReadUsersCallback((data) => {
            this.setState(
                {numUsers: data}
            );
        });
    }

    render() {
        return (
            <Status numUsers={this.state.numUsers} />
        );
    }
}
