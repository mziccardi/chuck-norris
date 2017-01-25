import React, { Component } from 'react';
import { Link } from 'react-router'
import './app-style.scss'

import Button from '../Button/Button'
import Header from '../Header/Header'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke:'',
      numberOfJokes:'',
      jokeArray: [],
      walrus:100
    };
  }

  componentDidMount(){
    const jokeURL = 'http://api.icndb.com/jokes/random/?escape=javascript'
    fetch(jokeURL).then((response)=>{
      return response.json()
    }).then((data)=>{
      // console.log(data)
      this.setState({randomJoke: data.value.joke})
    })
  }

  setJokeAmount(e){
    const num = e.target.value
    this.setState({ numberOfJokes:num })
  }



  getJokes(numberOfJokes){
    const jokeURL = `http://api.icndb.com/jokes/random/${numberOfJokes}/?escape=javascript`
    fetch(jokeURL).then((response)=>{
      return response.json()
    }).then((data)=>{
      this.setState({jokeArray:data.value})
      console.log(this.state.jokeArray)
//       jokeArray.map((joke)=>{
// 	return joke.joke
// })
    })
  }

  render() {
    return(
      <div>
        <Header />
        <div className='random-joke-container'>
          <div className='random-joke'>{this.state.randomJoke}</div>
        </div>
    {React.cloneElement(this.props.children,{
      numberOfJokes:this.state.numberOfJokes,
      randomJoke:this.state.randomJoke,
      jokeArray:this.state.jokeArray,
      setJokeAmount:this.setJokeAmount.bind(this),
      getJokes:this.getJokes.bind(this)
    })}
      </div>
    )
  }
}
