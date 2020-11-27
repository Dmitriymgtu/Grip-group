import { Provider } from 'mobx-react'
import React from 'react'
import renderer from 'react-test-renderer'
import { Store } from '../../src/store/store'

import CartView from '../../src/screens/CartView'

describe('CartView:', () => {
    
    const store = new Store()
    const tree = renderer.create(
        <Provider store={store}>
            <CartView/>
        </Provider>
    ).toJSON()
    
    it('should return void cart', () => {
        store.clearCart()
        expect(tree.children[0].children[0]).toBe('Ваша корзина пуста!')
    });
});
