import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import icedTea from '../Assets/iced-tea.svg'
import logo from '../Assets/logo@0.25.png'
import '../Style/css/error.css'

 class ErrorPage extends Component {
    propTypes = {
        headline: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }
    render() {

        if(this.props.loading !== true){
            return (<div></div>)
        }else{
            return (
                <div className="container">
                    <div>
                        <main>
                            <h1>{this.props.headline}</h1>
                            <h3>{this.props.text}</h3>
                        </main> 
                        <aside>
                            <img src={icedTea} alt="sad cup of beer"/>
                        </aside>
                    </div>
                    
                    <footer>
                        <img src={logo} alt="brewggle logo"/>
                    </footer>
                </div>
            )
        }

    }
}
const mapStateToProps = (state) => {
    return{
        loading: state.search.loading
    }
}

export default connect(mapStateToProps)(ErrorPage)