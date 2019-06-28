import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/css/pill.css'

class Pill extends Component{
    static propTypes = {
        text: PropTypes.string.isRequired
    }
    render(){
        return(
            <div className="pill">{this.props.text}</div>
        )
    }
}

export default Pill