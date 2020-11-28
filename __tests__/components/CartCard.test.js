import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'

import CartCard from '../../src/components/CartCard'
import { Store } from '../../src/store/store'

describe('CartCard:', () => {
  const store = new Store()
  const dish = {
    _id: 1,
    title: 'Маргарита',
    description: 'с соусом из помидор, сыром моцарелла и базиликом',
    section: 'Пицца',
    cost: 320,
    img: ''
  }
  let tree
  beforeEach(() => {
    tree = renderer.create(
      <Provider store={store}>
        <CartCard dish={dish}/>
      </Provider>
    ).toJSON()
  })
  
  afterEach(() => {
    tree = null
  })
  test('should return Image component', () => {
    console.log(tree)
    expect(tree.children[0].type).toEqual('Image')
  })
  
  test('should return View component', () => {
    expect(tree.children[1].type).toEqual('View')
  })
  
  
  test(`should return title of dish`, () => {
    tree = tree.children[1]
    expect(tree.children[0].children[0].children[0]).toEqual(dish.title)
  })
  
  test(`should return cost of dish`, () => {
    tree = tree.children[1]
    expect(tree.children[0].children[1].children[0]).toEqual(dish.cost + ' р.')
  })
  
});
