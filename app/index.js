import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
//import home here. CREATE THAT SHIT have home do the random joke shit in it


// import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from '../app/components/App/App'
import Header from '../app/components/Header/Header'
import Jokes from '../app/components/Jokes/Jokes'
import Settings from '../app/components/Settings/Settings'
import Favorites from '../app/components/Favorites/Favorites'
import './styles.scss'

const router = (
  <Router history = {hashHistory}>
    <Route path = '/' component = {App}>
      <IndexRoute component={Jokes}/>
      <Route path = '/jokes' component={Jokes}/>
      <Route path='/favorites' component={Favorites}/>
      <Route path = '/settings'>
        <IndexRoute component ={Settings}/>
      </Route>
    </Route>


  </Router>
)

render(router, document.querySelector('.application'));
