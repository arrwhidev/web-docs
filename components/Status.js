import React from 'react';

export default class Status extends React.Component {

    render() {
        return (
            <h2>Num users: {this.props.numUsers}</h2>
        );
    }
}
