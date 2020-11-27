import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'
import { Store } from '../../src/store/store'

import RestaurantCard from '../../src/Components/RestaurantCard'

describe('RestaurantCard:', () => {
  
  const store = new Store()
  const restaurant = {
    _id: 1,
    name: 'Паццо',
    deliveryTime: '50-60 мин.',
    deliveryCost: 500,
    img: ''
  }
  const tree = renderer.create(
    <Provider store={store}>
      <RestaurantCard restaurant={restaurant}/>
    </Provider>
  ).toJSON()
  
  it('should return Image component', () => {
    expect(tree.children[0].children[0].type).toBe('Image')
  })
  
  it('should return name of restaurant', () => {
    expect(tree.children[1].children[0].children[0]).toBe(restaurant.name)
  })
  
  it('should return number of card Data children', () => {
    expect(tree.children[1].children[1].children).toHaveLength(2)
  })
});
