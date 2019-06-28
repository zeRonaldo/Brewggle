import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './Views/Main'
import Search from './Views/Search'
import Beer from './Views/Beer'
import Loading from './Components/Loading';
import {connect} from 'react-redux'
import ErrorPage from './Components/ErrorPage';

function App(props) {
  const propsToError = {headline: "You are straying too far young one!", text: "This page doesn't exist yet or may never exist... who knows"}
  return (
      <React.Fragment>
          <Loading loading={props.loading}/>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/beer/:id" component={Beer}/>
              <Route exact path="/search/:query/type/:type" component={Search}/>
              <Route render={ () => <ErrorPage {...propsToError} />}/>
            </Switch>
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
