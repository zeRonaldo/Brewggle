import React, { Component } from 'react'
import PropTypes from 'prop-types';
import icedTea from '../Assets/iced-tea.svg'
import logo from '../Assets/logo@0.25.png'
import '../Style/css/error.css'

export default class ErrorPage extends Component {
    propTypes = {
        text: PropTypes.string.isRequired
    }
    render() {
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
