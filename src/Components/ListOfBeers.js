import React, { Component } from 'react'
import ShortBeer from './ShortBeer'
import { connect } from 'react-redux'
import ErrorPage from './ErrorPage'

class ListOfBeers extends Component{
   
    render(){
        const {beers} = this.props
        let items = []
       
        if(Object.entries(beers).length !== 0 && beers.constructor === Object){
                let beerList = Object.values(beers)
                beerList.map((beerItem) => 
                items.push(
                    <ShortBeer
                        id={beerItem.id}
                        beer={beerItem}/>
                )
            )
        }
        items = <ul className="search-result-list">{items}</ul>

        return (
            <React.Fragment>
                {Object.entries(beers).length !== 0 ?
                    items
                :
                    <ErrorPage headline="Awww maaaaan!" text="According to my calculations there is not a single beer like that in our DataBases" />
                }
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        beers: state.beers,
        query: state.search.query,
        type: state.search.type
    }
}

export default connect(mapStateToProps)(ListOfBeers)

