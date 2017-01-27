import React, { Component } from 'react';
import './jokes-style.scss';
import {Link} from 'react-router'

export default class Jokes extends Component {


  render(){

    const someJokes = this.props.jokeArray.map((joke)=>{
      return (
        <li
          key={joke.id}
          className='single-joke'>
          {joke.joke}
          <input
            onChange={()=>{
              this.props.favoritedJokes(joke)}}
            type ='checkbox'/>
        </li>
      )
    })
    return(
      <div>
        <div className='UI'>
          <Link to='/jokes'><button className='get-joke-btn'
            onClick= {()=>this.props.getJokes(this.props.numberOfJokes)}
            >Get Joke</button></Link>
          <input className='number-of-jokes'
          value={this.props.numberOfJokes}
          onChange={(num)=>this.props.setJokeAmount(num)}/>
      </div>
      <div className='favorites'>
        <Link to='/favorites'>
        <button className='favorite-btn'>Favorite Jokes</button>
        </Link>
      </div>
        <ul className='joke-Container'>
          {someJokes}
        </ul>

      </div>
    )
  }
}

Jokes.propTypes ={
  jokeArray: React.PropTypes.array,
  getJokes: React.PropTypes.func,
  numberOfJokes:React.PropTypes.string

}
