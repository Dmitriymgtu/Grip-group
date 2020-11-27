import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'
import { Store } from '../../src/store/store'

import DishCard from '../../src/Components/DishCard'

describe('DishCard:', () => {
  
  let store
  let tree
  const dish = {
    _id: 1,
    title: 'Маргарита',
    description: 'с соусом из помидор, сыром моцарелла и базиликом',
    section: 'Пицца',
    cost: 320,
    img: ''
  }
  beforeEach(() => {
    store = new Store()
    tree = renderer.create(
      <Provider store={store}>
        <DishCard dish={dish}/>
      </Provider>
    ).toJSON()
  })
  
  afterEach(() => {
    store = null
    tree = null
  })
  
  it('should return Image component', () => {
      expect(tree.children[0].type).toEqual('Image')
  });
  
  it('should return View component', () => {
    expect(tree.children[1].type).toEqual('View')
  });
  
  it('should return dish title', () => {
    expect(tree.children[1].children[0].children[0]).toEqual(dish.title)
  });
  
  it('should return 2 children', () => {
    expect(tree.children[1].children).toHaveLength(2)
  });
});
