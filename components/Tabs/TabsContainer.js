import React from 'react';
import Tabs from './Tabs';
import { connect } from 'react-redux';

const mapStateToProps = ({ activePage, markdown, html }) => ({ activePage, markdown, html });
export default connect(mapStateToProps)(Tabs);
