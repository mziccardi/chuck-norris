import React, { Component } from 'react';

import Button from '../Button/Button'
import Header form '../Header/Header'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke:'',
      jokesArray:[]
    };
  }

  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
