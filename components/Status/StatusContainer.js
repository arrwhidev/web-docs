import React from 'react';
import { connect } from 'react-redux';
import Status from './Status';

const mapStateToProps = ({ numUsers }) => ({ numUsers });
export default connect(mapStateToProps)(Status);
