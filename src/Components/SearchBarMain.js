import React, { Component } from 'react'
import searchIcon from '../Assets/baseline-search-24px.svg'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchedBeersToList, AllBeersToList } from '../Actions/shared'
import { setQuery, setQueryType} from '../Actions/Search'

class SearchBarMain extends Component {
    state={
        searchTypes: [
            {
                name: 'by Name',
                value: 'beer_name'
            },
            {
                name: 'by Hops',
                value: 'hops'
            },
            {
                name: 'by Food',
                value: 'food'
            }]      
    }
    
     handleSubmit = (e) => {
        e.preventDefault();
        const {query, type} = this.props
        this.setSearchBar(query,type)
        this.props.history.push(`/search/${query}/type/${type}`);
    }

    setSearchBar = async (query, type) => {
        this.props.dispatch (setQuery(query))
        this.props.dispatch (setQueryType(type))

        query !== '0' ?
            this.props.dispatch (searchedBeersToList(query,type))
        :
            this.props.dispatch (AllBeersToList())
    }

     componentWillMount = () => {
        const {match, query, type} = this.props

        if(Object.entries(match.params).length === 0 && match.params.constructor === Object){
            this.setSearchBar('0', type)
        }else if(match.params.query && match.params.type ){
            if(query === '0'){
                this.setSearchBar(match.params.query, match.params.type)
            }
        }
        
    }

    render(){

        const {placeholder,query, type} = this.props
        
        return(
            <div className="search-bar">
                <img src={searchIcon} className="search-icon" alt="icon"></img>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={query === '0' ? '': query} onChange={event => this.props.dispatch(setQuery(event.target.value))} placeholder={placeholder}></input>
                    <select id="type-of-search" onChange={event => this.props.dispatch(setQueryType(event.target.value))} value={type}>
                        {this.state.searchTypes.map( (typeSearch) =>
                            {
                                    return (<option value={typeSearch.value} key={typeSearch.value}>{typeSearch.name}</option>)
                            })}
                    </select>
                </form>
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        query: state.search.query,
        type: state.search.query_type
    }
}

export default withRouter(connect(mapStateToProps)(SearchBarMain)) 