import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect, assert } from 'chai';
import sinon from 'sinon'

import Jokes from './Jokes';
import Button from '../Button/Button'

describe('Jokes', ()=> {
  const testArray = ['mike', 'ziccardi', 'is', 'handsome']
  it('should render as a div',()=>{
    const wrapper = shallow(<Jokes jokeArray={testArray} />)
    expect(wrapper.find('div')).to.have.length(3)
  })
  it('should have a button to jokes',()=>{
    const wrapper = shallow(<Jokes jokeArray={testArray}/>)
    expect(wrapper.find('.get-joke-btn')).to.have.length(1)
  })
  it('should have button to favorites', ()=>{
    const wrapper = shallow(<Jokes jokeArray={testArray}/>)
    expect(wrapper.find('.favorite-btn')).to.have.length(1)
  })
})
