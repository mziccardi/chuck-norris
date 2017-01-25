import React, { Component } from 'react';
import './jokes-style.scss';

export default class Jokes extends Component {


  render(){
    const someJokes = this.props.jokeArray.map((joke)=>{
      return <div key={joke.id} className='single-joke'>{joke.joke}</div>
    })
    return(
      <div>
      <input className='number-of-jokes' type='number'
        value={this.props.numberOfJokes}
        onChange={(num)=>this.props.setJokeAmount(num)}/>
      <button className='get-joke-btn'
        onClick= {()=>this.props.getJokes(this.props.numberOfJokes)}
        >Get Joke</button>
        <div className='joke-Container'>{someJokes}</div>

      </div>
    )
  }
}
