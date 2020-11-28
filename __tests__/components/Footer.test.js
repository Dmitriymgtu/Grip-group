import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'
import { Store } from '../../src/store/store'

import Footer from '../../src/components/Footer'

describe('Footer:', () => {
  
  let store
  let tree
  
  beforeEach(() => {
    store = new Store()
    tree = renderer.create(
      <Provider store={store}>
        <Footer component={'Main'}/>
      </Provider>
    ).toJSON()
  })
  
  afterEach(() => {
    store = null
    tree = null
  })
  it('should return component with View and Text', () => {
    tree.children.forEach(child => {
      expect(child.children[0].type).toEqual('View')
      expect(child.children[1].type).toEqual('Text')
    })
  });
  
  it('should return cur footer component', () => {
    expect(tree.children[0].children[1].props.style).toEqual({color: 'black'})
  });
  
  it('should return main', () => {
    expect(tree.children[0].children[1].children[0]).toEqual('Главное')
  });
  
  it('should return сart', () => {
    expect(tree.children[1].children[1].children[0]).toEqual('Корзина')
  });
  
  it('should return order', () => {
    expect(tree.children[2].children[1].children[0]).toEqual('Заказ')
  });
  
  it('should return profile', () => {
    expect(tree.children[3].children[1].children[0]).toEqual('Профиль')
  });
});
