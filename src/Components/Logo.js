import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoBig from './../Assets/logo.png';
import LogoSmall from './../Assets/logo@0.25.png';

const Logo = (props) => 
{
    if (props.size === 'large'){
         return(
        <div className="logo">
            <Link to="/">
                <img src={LogoBig} alt="Brewggle"/>
            </Link>
        </div>
        )
    } else{
        return(
            <div className="logo">
                <Link to="/">
                    <img src={LogoSmall} alt="Brewggle"/>
                </Link>
            </div>
            )
    } 
}

Logo.propTypes = {
    size: PropTypes.string.isRequired
}

export default Logo