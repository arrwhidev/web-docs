import React from 'react';

export default class Marked extends React.Component {

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.content}} />
        );
    }
}
