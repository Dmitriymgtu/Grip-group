import { Provider } from 'mobx-react';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { Store } from '../../src/store/store';

import CartView from '../../src/screens/CartView'

describe('<CartView/>', () => {

    let store = null
    let tree = null
    beforeEach(() => {
        store = new Store()
        tree = renderer.create(
            <Provider store={store}>
                <CartView/>
            </Provider>
        ).toJSON()
    })

    afterEach(() => {
        tree = null
        store = null
    })

    it('should return void cart', () => {
        store.clearCart()
        expect(tree.children[0].children[0]).toBe('Ваша корзина пуста!')
    });

    
    it('clear button should clear cart', () => {
        act(() => {
            store.setCart({_id: 1, title: 'Маргарита', description: 'с соусом из помидор, сыром моцарелла и базиликом', section: 'Пицца', cost: 320, img: '', count: 0}, 2)
            tree.update(
            <Provider store={store}>
                <CartView/>
            </Provider>)
        })
        console.log('tree', tree)
        expect(tree.children[0].children[0]).toBe('Ваша корзина пуста!')
    });
});