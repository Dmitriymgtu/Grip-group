import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'

import Field from '../../src/Components/Field'
import { Store } from '../../src/store/store'

describe('Field:', () => {
  let store
  let tree
  
  test('should return Text and TextInput components', () => {
    store = new Store()
    tree = renderer.create(
      <Provider store={store}>
        <Field value={''} title='Адрес'/>
      </Provider>
    ).toJSON()
    expect(tree.children[0].type).toEqual('Text')
    expect(tree.children[1].type).toEqual('TextInput')
  })
});
