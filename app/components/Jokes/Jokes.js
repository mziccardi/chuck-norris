import React, { Component } from 'react';
import './jokes-style.scss';

export default class Jokes extends Component {


  render(){
    const someJokes = this.props.jokeArray.map((joke)=>{
      return <li key={joke.id} className='single-joke'>{joke.joke}</li>
    })
    return(
      <div>
        <div className='UI'>
          <button className='get-joke-btn'
            onClick= {()=>this.props.getJokes(this.props.numberOfJokes)}
            >Get Joke</button>
          <input className='number-of-jokes'
          value={this.props.numberOfJokes}
          onChange={(num)=>this.props.setJokeAmount(num)}/>
      </div>
        <ul className='joke-Container'>
          {someJokes}
        </ul>

      </div>
    )
  }
}
