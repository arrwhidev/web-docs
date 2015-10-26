import React from 'react';
import marked from 'marked';
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

export default class PreviewDocument extends React.Component {
    render() {
        const html = marked(this.props.markdown);
        return (
            <ContentEditable html={html} />
        );
    }
}
