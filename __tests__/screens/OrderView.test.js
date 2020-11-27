import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'
import { Store } from '../../src/store/store'

import OrderView from '../../src/screens/OrderView'

describe('OrderView:', () => {
  
  const store = new Store()
  const tree = renderer.create(
    <Provider store={store}>
      <OrderView/>
    </Provider>
  ).toJSON()
  
  it('should wrapped into scrollview component', () => {
    expect(tree.type).toBe('RCTScrollView')
  })
  
  it('should has 7 children', () => {
    expect(tree.children[0].children[0].children).toHaveLength(7)
  })
});

