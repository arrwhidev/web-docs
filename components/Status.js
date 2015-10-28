import React from 'react';

export default class Status extends React.Component {
    render() {
        return (
            <p>Num active users: {this.props.numUsers}</p>
        );
    }
}
