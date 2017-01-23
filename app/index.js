import React from 'react'
import { render } from 'react-dom'
import Header from '../app/components/Header/Header'
import './styles.scss'

const App = () => {
  return (
    <div>
      Hello World
      <Header />
    </div>
  );
}

render(<App />, document.querySelector('.application'));
