import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'

import AddressTitle from '../../src/components/AddressTitle'
import { Store } from '../../src/store/store'

describe('AddressTitle:', () => {
  
  test('should return scroll of addresses', () => {
    const store = new Store()
    const tree = renderer.create(
      <Provider store={store}>
        <AddressTitle/>
      </Provider>
    ).toJSON()
    expect(tree.children[1].type).toEqual('RCTScrollView')
  })
});
