import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect, assert } from 'chai';
import sinon from 'sinon'

import Favorites from './Favorites';

describe('Favorites',()=> {
  const testArray = ['mike', 'ziccardi', 'is', 'handsome']
  it('should display a single ul',()=> {
    const wrapper = shallow(<Favorites favoriteJokes ={testArray}/>);
    expect(wrapper.find('ul')).to.have.length(1);
  });
  it.skip('should render as a div',()=>{
    const wrapper = shallow(<Favorites favoritedJoke={testArray} />)
    assert.equal(wrapper.type(),'div')
  })
})
