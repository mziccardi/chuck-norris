import React, { Component } from 'react';

import Button from '../Button/Button'
import Header from '../Header/Header'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke:'',
      jokesArray:[]
    };
  }

  componentDidMount(){
    const jokeURL = 'http://api.icndb.com/jokes/random'
    fetch(jokeURL).then((response)=>{
      return response.json()
    }).then((data)=>{
      let randomJoke = data.value.joke
      
      this.setState({randomJoke:data.value.joke})
    })
  }


  render(){
    return(
      <div>
        <Header />
        <div className = 'randomjoke'>
          {this.state.randomJoke}
        </div>
      </div>
    )
  }
}
