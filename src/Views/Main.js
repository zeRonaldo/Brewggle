import React, { Component } from 'react'
import '../Style/css/main.css';
import { connect } from 'react-redux'
import Logo from './../Components/Logo';
import GrayButton from './../Components/GrayButton';
import SearchBarMain from '../Components/SearchBarMain';

class Main extends Component{
    render(){
        const {query, type} = this.props
        
        return(
            <React.Fragment>
                <header>
                    
                </header>
                
                <section className="content">
                    <div className="logo">
                        <Logo size="large"></Logo>
                    </div>
                    <SearchBarMain placeholder="Well... the cup doesn't fill itself right"/>
                    <div className="actions">
                         <GrayButton text="Search on Brewggle" goTo={`/search/${query}/type/${type}`} ></GrayButton>
                         <GrayButton text="I'm feeling Lucky" goTo="/beer/random"></GrayButton>
                    </div>
                </section>
                
            </React.Fragment>
            

        )
    }
}


const mapStateToProps = (state) => {
    return {
        query: state.search.query,
        type: state.search.query_type
    }
}


export default connect(mapStateToProps)(Main)