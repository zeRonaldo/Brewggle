import React, {Component} from 'react'
import Logo from './Logo'
import SearchBarMain from './SearchBarMain'
import LogedPrompt from './LogedPrompt'
import '../Style/css/header.css'

class Header extends Component {
    render(){
        return(
            <header>
                <Logo size="small"/>
                <SearchBarMain/>
                <LogedPrompt/>
            </header>
        )
        
    }
}

export default Header