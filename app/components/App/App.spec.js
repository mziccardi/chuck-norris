
import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Application from './App'
import Jokes from '../Jokes/Jokes'
const sinon = require('sinon')

describe('Application', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Application children={Jokes} />)
  })
  it('renders as a Div', ()=>{
    const wrapper = shallow(<Application children ={Jokes} />)
    assert.equal(wrapper.type(),'div')
  })
  it('can call component did mount method', ()=> {
    sinon.spy(Application.prototype,'componentDidMount')
    const wrapper = mount(<Application children={Jokes} />)
    assert.equal(Application.prototype.componentDidMount.calledOnce, true)
  })
})
