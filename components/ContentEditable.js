/**
* https://github.com/lovasoa/react-contenteditable
*/

import React from 'react';

export default class ContentEditable extends React.Component {
  constructor() {
    super();
    this.emitChange = this.emitChange.bind(this);
  }

  render() {
    return <div
      {...this.props}
      onInput={this.emitChange}
      contentEditable="true"
      dangerouslySetInnerHTML={{__html: this.props.html}}></div>;
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.html !== React.findDOMNode(this).innerHTML;
  }

  componentDidUpdate() {
    if ( this.props.html !== React.findDOMNode(this).innerHTML ) {
     React.findDOMNode(this).innerHTML = this.props.html;
    }
  }

  emitChange(evt) {
    var html = React.findDOMNode(this).innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      evt.target = { value: html };
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  }
}
