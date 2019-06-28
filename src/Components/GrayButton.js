import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const GrayButton = (props) => {
    return (
        <Link
            to={props.goTo} 
            className='gray-button'>
                
                    {props.text}
                
            </Link>
    )
}

GrayButton.propTypes = {
    text: PropTypes.string.isRequired,
    goTo: PropTypes.any 
}

export default GrayButton