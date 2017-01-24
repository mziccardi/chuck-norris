import React from 'react'
import { render } from 'react-dom'

// import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from '../app/components/App/App'
import Header from '../app/components/Header/Header'
import './styles.scss'



render(<App />, document.querySelector('.application'));
