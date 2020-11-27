import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'
import { Store } from '../../src/store/store'

import Main from '../../src/screens/Main'

describe('Main:', () => {
  
  const store = new Store()
  const tree = renderer.create(
    <Provider store={store}>
      <Main/>
    </Provider>
  ).toJSON()
  
  it('Main has two components in itself', () => {
    expect(tree).toHaveLength(2)
    expect(tree[0].type).toEqual('View')
    expect(tree[1].type).toEqual('RCTScrollView')
  });
});
