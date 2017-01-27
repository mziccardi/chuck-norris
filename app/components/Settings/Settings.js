import React, {Component} from 'react';
import './settings-style.scss';


export default class Settings extends Component {


    render(){
    return(
      <div className='settings-container'>
        <span>
          Set Name
          </span>
            <span>
              <input
                value={this.props.name}
                onChange= {(name)=>this.props.setName(name)}
                className = 'name-changer'
                placeholder='change names'/>
                <span className = 'btn-container'>
                  <button className = 'set'>Set</button>
                  <button className ='reset'>Reset</button>
                </span>
            </span>
            <div onChange ={this.props.toggleParental} >
              Adult Only:
            ON:  <input type='radio' value='On'/>
            OFF:  <input type='radio' value='Off'/>
            </div>
      </div>
    )
  }
}
