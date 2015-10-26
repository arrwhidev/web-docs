import React from 'react';
import Marked from './Marked.js';
import mui from 'material-ui';
import marked from 'marked';
import tomd from 'to-markdown';
import ContentEditable from './ContentEditable.js';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default class Document extends React.Component {

    state = {};

    constructor() {
        super();
        this.oldhtml = '';
        this.oldmd = '';
    }

    render() {
        return (
            <div>
                <div>
                    <mui.TextField
                        onChange={this.processText}
                        value={this.props.text}
                        multiLine={true}
                    />
                </div>
                <ContentEditable html={this.state.html} onChange={this.processText} />
            </div>
        );
    }

    processText = (ev) => {
        const md = tomd(ev.target.value);
        this.setState({
            html: marked(md)
        })
    }
}
