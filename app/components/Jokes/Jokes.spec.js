import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect, assert } from 'chai';
import sinon from 'sinon'

import Header from './Header';
import Button from '../Button/Button'

describe('Header', function () {
  it('should display a single h1 tag', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
  it('should render as a div',()=>{
    const wrapper = shallow(<Header />)
    assert.equal(wrapper.type(),'div')
  })
