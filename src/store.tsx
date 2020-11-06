import {observable, action, makeAutoObservable} from 'mobx';

interface Dish {
    title: string
    description: string
    cost: number
    counter: number
}

interface Cart {
    cartCost: number
    dishes: Dish[]
}

interface Order {
    time: number
    address: string
    flat: number
    intercom: number //домофон
    porch: number //подъезд
    floor: number
    comment: string
    promoCode: string
}

type Component = 'Main' | 'Profile' | 'Restaurant' | 'Cart' | 'Order'

class Store {

    componentName: Component = 'Main'
    restaurant: string = '';
    dishes: Dish[] = []
    cart: Cart = {
        cartCost: 0,
        dishes: []
    }

    constructor() {
        makeAutoObservable(this)
    }

    setComponent = (component: Component): void => {
         this.componentName = component;
     }

}

export default new Store()