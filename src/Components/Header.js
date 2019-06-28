import React, {Component} from 'react'
import Logo from './Logo'
import SearchBarMain from './SearchBarMain'
import '../Style/css/header.css'

class Header extends Component {
    render(){
        return(
            <header>
                <Logo size="small"/>
                <SearchBarMain/>
            </header>
        )
        
    }
}

export default Header