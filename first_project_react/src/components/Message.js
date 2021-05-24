import React from 'react'
import PropTypes from 'prop-types';
export default class Messages extends React.Component{

    static propTypes = {
        text: PropTypes.string.isRequired,
        };
        render() {
        return <div>{ this.props.text }</div>
        }
}