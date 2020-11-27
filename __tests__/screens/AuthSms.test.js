import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'

import AuthSms from '../../src/screens/AuthSms'

describe('AuthSms:', () => {
  
  const tree = renderer.create(
    <AuthSms/>
  ).toJSON()
  
  it('should return textinput', () => {
    expect(tree.children[0].children[0].children[0].type).toBe('TextInput')
  });
  
  it('should return textinput', () => {
    expect(tree.type).toBe('RCTScrollView')
  });
  
  it('should return textinput', () => {
    expect(tree.children[0].children).toHaveLength(1)
  });
  
  
});
