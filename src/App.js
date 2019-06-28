import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './Views/Main'
import Search from './Views/Search'
import Beer from './Views/Beer'
import {LoadingBar} from 'react-redux-loading-bar'

function App() {
  return (
      <React.Fragment>
          <LoadingBar />
          <BrowserRouter>
            <Route exact path="/" component={Main}/>
            <Route exact path="/beer/:id" component={Beer}/>
            <Route path="/search/:query/type/:type" component={Search}/>
          </BrowserRouter>
      </React.Fragment>
      

  );
}

export default App;
