import React, { Component } from 'react'
import {connect} from 'react-redux'
import Pill from './Pill';
import ErrorPage from './ErrorPage'
import { withRouter } from 'react-router-dom'
import { getBeerById } from '../Actions/shared'

class FullBeer extends Component{
    
     componentDidMount = () => {
        const {match, dispatch} = this.props
        
        if( match.params.id <= 325 || match.params.id === 'random'){
            dispatch(getBeerById(match.params.id))
            
        }

    }

    component = (beer) => {
        
        return beer.map(beer => 
                    <div className="beer-container" key={beer.id}>
                        <div className="beer-info">
                            <div className="beer-main-pic">
                                <img src={beer.image_url} alt={`${beer.beer_name}`}></img>
                            </div>

                            <div className="beer-main-info">
                                <h1>{beer.name}</h1>
                                <h2>{beer.tagline}</h2>
                                <Pill text={beer.ingredients.yeast}/>
                            </div>
                            
                            <div className='beer-social-info'>

                            </div>
                        </div>


                        <div className="beer-details">
                            <h3>Description</h3>
                            <p>{beer.description}</p>
                            <h4>Brewer Commentary:</h4>
                            <p>{beer.brewers_tips}</p>
                        </div>
                    </div>)
    }

    render(){
        const {beer} = this.props

        let show

        if( beer !== null) {
            show = this.component(Object.values(beer))
        }else{
            show = <ErrorPage headline="Oops, an error ocurred!" text="Seems like the beer you searched for is not available"/>
        }
        
        return show
        
    }
}

const mapStateToProps = (state) => {
    return {
        beer: state.beer
    }
}

export default withRouter(connect(mapStateToProps)(FullBeer))

