import React, { Component } from 'react';
import { Link } from 'react-router'

import Button from '../Button/Button'
import Header from '../Header/Header'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke:'',
      numberOfJokes:'',
      jokeArray:null
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



  getJokes(numberOfJokes){
    const jokeURL = `http://api.icndb.com/jokes/random/${numberOfJokes}/?escape=javascript`
    fetch(jokeURL).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data.value)
      this.setState({jokeArray:data.value})
//       jokeArray.map((joke)=>{
// 	return joke.joke
// })
    })
  }

  render() {
    return(
      <div>
        <Header />
        <div className = 'randomjoke'>
          {this.state.randomJoke}
        </div>
        <input className='number-of-jokes' type='number'
          value={this.state.numberOfJokes}
          onChange={(e)=>this.setState({numberOfJokes:e.target.value})}/>
        <Link to='/jokes'>
        <Button
          getJokes={()=> this.getJokes(this.state.numberOfJokes)}/>
        </Link>
        {this.props.children}
      </div>
    )
  }
}
