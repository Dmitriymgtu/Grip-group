import { observable, action } from 'mobx'
import { createContext } from 'react';

type Component = 'Main' | 'Profile' | 'Restaurant' | 'Cart' | 'Order'

class Store {
    @observable componentName: Component = 'Main';
    @action setComponent = (component: Component): void => {
         this.componentName = component
         alert(this.componentName)
     }
}

/* Store = decorate(Store, {
    component: observable,
    setComponent: action
}) */
export const storeContext = createContext(new Store())