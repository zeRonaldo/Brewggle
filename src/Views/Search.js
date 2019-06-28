import React, { Component } from 'react'
import Header from './../Components/Header'
import ListOfBeers from '../Components/ListOfBeers'
import '../Style/css/search.css'

class Search extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <ListOfBeers/>
            </React.Fragment>
        )
    }
}

export default Search

