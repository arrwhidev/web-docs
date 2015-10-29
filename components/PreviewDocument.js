import React from 'react';
import toHtml from '../util/ToHtml.js';

export default class PreviewDocument extends React.Component {
    render() {
        const html = toHtml(this.props.markdown);
        return (
            <div dangerouslySetInnerHTML={{__html: html}}></div>
        );
    }
}
