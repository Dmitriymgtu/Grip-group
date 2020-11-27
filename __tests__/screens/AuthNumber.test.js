import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'

import AuthNumber from '../../src/screens/AuthNumber'

describe('AuthNumber:', () => {
  
  const tree = renderer.create(
      <AuthNumber/>
  ).toJSON()
  
  it('should return scrollview wrapper', () => {
    expect(tree.type).toBe('RCTScrollView')
  });
  
  it('should return one textinput', () => {
    expect(tree.children[0].children[0].children[0].children[0].type).toBe('TextInput')
    expect(tree.children[0].children[0].children[0].children).toHaveLength(1)
  });
});
