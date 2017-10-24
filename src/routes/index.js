import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../containers/App'
import FirstPage from '../containers/first'
import SecondPage from '../containers/second'
import NoMatch from '../components/NoMatch'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={FirstPage}/>
        <Route path="second" component={SecondPage}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  )
}

export default Routes


