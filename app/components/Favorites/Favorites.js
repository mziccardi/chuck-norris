import React, { Component } from 'react';
import './favorites-style.scss';
import {Link} from 'react-router'

export default class Favorites extends Component {

  render(){

    const favoritedJokes = this.props.favoriteJokes.map((joke)=>{
      return (
        <li
          key={joke.id}
          className='favorite-joke'>
           {joke}
        </li>
      )
    })
    return(
      <div>
        <ul className='favorite-container'>
          {this.props.favoriteJokes.length !== 0 ? favoritedJokes : <div className = 'fav-message'>Favorite Some Jokes</div>}
        </ul>
      </div>
    )
  }
}
Favorites.propTypes ={
  favoriteJokes: React.PropTypes.array,
}
