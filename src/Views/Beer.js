import React, { Component } from 'react'
import Header from './../Components/Header'
import FullBeer from '../Components/FullBeer';
import '../Style/css/beer.css';

class Beer extends Component{
    
    render(){
        
        return(
           <React.Fragment>
               
                    <Header />
                    <FullBeer />

           </React.Fragment> 
           
        )
    }
}



export default Beer

