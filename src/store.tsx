import {observable, action, makeAutoObservable} from 'mobx';

type Component = 'Main' | 'Profile' | 'Restaurant' | 'Cart' | 'Order'

class Store {
    componentName: Component = 'Main'
    field = ''

    constructor() {
        makeAutoObservable(this)
    }
    setComponent = (component: Component): void => {
         this.componentName = component;
         console.log('STORE:', this)
     }
     setField(text: string): void {
        this.field = text; 
     }
}

export default new Store()