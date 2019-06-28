import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import Pill from './Pill'

class ShortBeer extends Component{

    render(){
        const{id, name, tagline, yeast, description} = this.props.beer

        return(
            <li key={id} className="search-result">
                <Link to={`/beer/${id}`} key={id}>
                    <div className="main-info">
                        <h3>{name}</h3>
                        <Pill text={yeast}/>

                    </div>
                    
                    <h4>{tagline}</h4>

                    <p>{description.substring(0,120).length === 120 ? description.substring(0,120).concat('...'): description }</p>
                </Link>
            </li> 
        )
    }
}

export default ShortBeer

