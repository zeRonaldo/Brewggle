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
        console.log(beer)
        return beer.map(beer => 
                    <div className="beer-container" key={beer.id}>
                        <div className="beer-info">
                            <div className="beer-main-pic">
                                {beer.image_url ?
                                    <img src={beer.image_url} alt={`${beer.beer_name}`}></img>
                                :
                                    <div>No Image available</div>
                                }
                                
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
                            <section>
                                <h3>Description</h3>
                                <section>    
                                    <p>{beer.description}</p>
                                </section>
                                
                                <section>
                                    <h4>Brewer Commentary:</h4>
                                    <p>{beer.brewers_tips}</p>
                                </section>
                            </section>
                            
                            
                            
                            
                            <section>
                                <h3>More Info</h3>
                                <section>
                                    <h5>Details</h5>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><b>ABV:</b> {beer.abv}</td>
                                                <td><b>Brewed Since:</b> {beer.first_brewed}</td>
                                                <td><b>EBC:</b> {beer.ebc}</td>
                                            </tr>
                                            
                                            <tr>
                                                <td><b>Ph:</b> {beer.ph}</td>
                                                <td><b>IBU:</b> {beer.ibu}</td>
                                                <td><b>SRM:</b> {beer.srm}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>

                                {Object.values(beer.ingredients).length !== 0 ?
                                    <section>
                                        <h5>Ingredients</h5>
                                        <table>
                                            <tbody>
                                                {Object.values(beer.ingredients.hops !== 0) &&
                                                    <tr>
                                                        <td><b>Hops</b></td>
                                                        <td>{beer.ingredients.hops.map((hops,index) => {
                                                            if(index === 0){
                                                                return `${hops.name}`
                                                            }
                                                            return `, ${hops.name} `
                                                        })}</td>
                                                    </tr>
                                                }

                                                {Object.values(beer.ingredients.malt !== 0) &&
                                                    <tr>
                                                        <td><b>Malt</b></td>
                                                        <td>{beer.ingredients.malt.map((malt,index) => {
                                                            if(index === 0){
                                                                return `${malt.name}`
                                                            }
                                                            return `, ${malt.name} `
                                                        })}</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </section>
                                : null
                                }
                                
                                {Object.values(beer.food_pairing).length !== 0 ?
                                    <section>
                                        <h5>Food Pairings</h5>
                                        <ul>
                                            {beer.food_pairing.map((food, index) => <li key={index}>{food}</li>)}
                                        </ul>
                                    </section>
                                : null
                                }
                            </section>
                        </div>
                    </div>)
    }

    render(){
        const {beer} = this.props

        let show 
        
        if( beer !== null ) {
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

