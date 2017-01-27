
import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Application from './App'
import Jokes from '../Jokes/Jokes'
const sinon = require('sinon')

describe('Application', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Application children={true} />)
  })
  it('renders as a Div', ()=>{
    const wrapper = shallow(<Application children ={true} />)
    assert.equal(wrapper.type(),'div')
  })
  it('can call component did mount method', ()=> {
    sinon.spy(Application.prototype,'componentDidMount')
    const wrapper = mount(<Application children={true} />)
    assert.equal(Application.prototype.componentDidMount.calledOnce, true)
  })
  it('should render a header component',()=>{
    const wrapper=shallow(<Application children={true}/>)
    expect(wrapper.find('Header')).to.have.length(1)
  })
  it.skip('should run favoritedJokes on click',()=>{
    let favoritedJokes = sinon.spy()
    const wrapper = mount(<Application children={true}/>)
    wrapper.find('.checkbox').simulate('click')
    expect(favoritedJokes.callCount).to.equal(1)

  })
})
