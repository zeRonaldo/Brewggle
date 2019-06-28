import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './Views/Main'
import Search from './Views/Search'
import Beer from './Views/Beer'
import Loading from './Components/Loading';
import {connect} from 'react-redux'
import ErrorPage from './Components/ErrorPage';

function App(props) {
  return (
      <React.Fragment>
          <Loading loading={props.loading}/>
          <BrowserRouter>
            <Route exact path="/" component={Main}/>
            <Route exact path="/beer/:id" component={Beer}/>
            <Route exact path="/search/:query/type/:type" component={Search}/>
            <Route path="/">
              <ErrorPage headline="You are going far young one" text="The page you're trying to reach doesn't exist" />
            </Route>
          </BrowserRouter>
      </React.Fragment>
      

  );
}

const mapStateToProps = (state) => {
  return {
      loading: state.search.loading
  }
}

export default connect(mapStateToProps)(App);
