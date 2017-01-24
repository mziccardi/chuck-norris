import React from 'react'
import { render } from 'react-dom'

// import { Router, Route, IndexRoute, browserHistory} from 'react-router'

import Header from '../app/components/Header/Header'
import './styles.scss'

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
}

render(<App />, document.querySelector('.application'));
