import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class LogedPrompt extends Component {
    state = {
        islogged: false
    }
    render(){
        let comp;
        if(this.state.islogged){
            comp= <div>Is Logged</div>
        }else{
            comp = <Link to="/" className="login-button">
                Login
            </Link>
        }
        return(
            <React.Fragment>
                {comp}
            </React.Fragment>
        )
        
    }
}

export default LogedPrompt