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
      numberOfJokes: '' ,
      jokeArray: [],
      favoriteJokes:[],
      firstName:'Chuck' || '',
      lastName:'Norris' || ''

    };
  }

  componentDidMount(){
    const jokeURL = 'http://api.icndb.com/jokes/random/?escape=javascript'
    fetch(jokeURL).then((response)=>{
      return response.json()
    }).then((data)=>{
      this.setState({randomJoke: data.value.joke})
    })
  }

  setJokeAmount(e){
    const num = e.target.value
    this.setState({ numberOfJokes:num })
  }
  setName(e){
    const name = e.target.value
    let nameArray = name.split(' ')
    this.setState({ firstName:nameArray[0], lastName:nameArray[1] })
  }

  // favoritedJokes(joke){
  //   let favoriteJokes = this.state.favoriteJokes
  //   let favorite = favoriteJokes.push({
  //     joke: joke.joke,
  //     id:joke.id
  //   })
  //   this.setState({favoriteJokes:favorite})
  //   console.log(favorite)
  // }


  getJokes(numberOfJokes){
    const jokeURL = `http://api.icndb.com/jokes/random/${numberOfJokes}?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}`
    // const jokeURL = `http://api.icndb.com/jokes/random/firstName=${name}?escape=javascript`

    fetch(jokeURL).then((response)=>{
      return response.json()
    }).then((data)=>{
      this.setState({jokeArray:data.value})
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
      getJokes:this.getJokes.bind(this),
      favoriteJokes:this.state.favoriteJokes,
      fullName:this.state.name,
      setName:this.setName.bind(this)
      // favoritedJokes:this.favoritedJokes.bind(this)
    })}
      </div>
    )
  }
}
