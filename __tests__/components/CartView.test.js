import { Provider } from 'mobx-react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Store } from '../../src/store/store';

import CartView from '../../src/CartWindow/CartView'

describe('<CartView/>', () => {

    const store = new Store()

    beforeEach(() => {
    })

    afterEach(() => {

    })

    it('should return void cart', () => {
        expect().toBe();
    });
});