import {makeAutoObservable} from 'mobx';
import rests from './restaurants';

interface Dish {
    _id: number,
    title: string
    description: string
    cost: number
    section: Section
    img: string
}

interface CartDish extends Dish {
    count: number
}

interface Cart {
    cartCost: number
    dishes: CartDish[]
}

interface Order {
    "Время доставки": string
    "Адрес доставки": string
    'Кв/офис': string
    'Домофон': string
    'Подъезд': string
    'Этаж': string
    'Комментарий к заказу'?: string
    'Промокод'?: string 
}

// let map = new Map([
//     ["Время доставки", ''],
//     ["Время доставки", ''],
//     ["Время доставки", ''],
//     ["Время доставки", ''],
// ])
interface Restaurant {
    name: string
    deliveryTime: string
    deliveryCost: number
    img: string
    dishes: Dish[]
}

interface CartRestaurant extends Restaurant {
    dishes: CartDish[]
} 
type Component = 'Main' | 'Profile' | 'Restaurant' | 'Cart' | 'Order'
type Section = 'Пицца' | 'Роллы' | 'Напитки' | 'Бургеры' | 'Паста' | 'Горячие блюда' | 'Свежий хлеб' | 'Десерты' | 'Паста' | 'Алкоголь' | 'Салаты' | 'Сэндвичи с картофелем фри' | 'Гриль'
//enum 
type MapType = Record<string, string>
export class Store {

    restaurants: Restaurant[] = rests
    cart: Cart = {
        cartCost: 0,
        dishes: []
    }
    currentRestaurant: CartRestaurant | null = null
    previousRestaurant: CartRestaurant | null = null
    order: MapType = {
        "Время доставки": '',
        "Адрес доставки": '',
        'Кв/офис': '',
        'Домофон': '',
        'Подъезд': '',
        'Этаж': '',
        'Комментарий к заказу': '',
        'Промокод': '',
    }

    constructor() {
        makeAutoObservable(this)
    }

    setRestaurant = (restaurant: Restaurant): void => {
        if (!this.previousRestaurant) {
            if (!this.currentRestaurant) {
                this.currentRestaurant = {...restaurant, dishes: restaurant.dishes.map((dish: Dish) => {return {...dish, count: 0}})}
            }
            else if (this.currentRestaurant?.name !== restaurant.name) {
                this.previousRestaurant = {...this.currentRestaurant}
                this.currentRestaurant = {...restaurant, dishes: restaurant.dishes.map((dish: Dish) => {return {...dish, count: 0}})}
            }
        }
        else {
            if (this.previousRestaurant.name === restaurant.name) {
                this.currentRestaurant = {...this.previousRestaurant}
                this.previousRestaurant = null
            }
            else {
                this.currentRestaurant = {...restaurant, dishes: restaurant.dishes.map((dish: Dish) => {return {...dish, count: 0}})}
            }
        }
    }

    clearPreviousRestaurant = (): void => {
        this.previousRestaurant = null
    }

    setDishCount = (dish: CartDish, counter: number): void => {
        let foundedDish = this.currentRestaurant ? (this.currentRestaurant.dishes.find((value:CartDish) => value._id === dish._id)) : false
        if (foundedDish) foundedDish.count = counter
    }

    pushCart = (dish:CartDish):void => {
        this.cart.dishes.push(dish)
        this.cart.cartCost += dish.count * dish.cost
    } 

    setCart = (dish: CartDish, counter: number): void => {
        const dishes = this.cart.dishes
        let foundedDish = dishes.find((value:CartDish) => value._id === dish._id)

        this.cart.dishes = foundedDish ? (counter === 0 ? dishes.filter(value => value._id !== dish._id) : dishes.map(value => value._id === dish._id ? {...value, count: counter} : value)) : (counter !== 0 ? [...dishes, {...dish, count: counter}] : [...dishes])

        let sum: number = 0
        this.cart.dishes.forEach(value => sum += value.cost * value.count)
        this.cart.cartCost = sum 
    }

    clearCart = (): void => {
        this.cart = {
            cartCost: 0,
            dishes: []
        }
    }

    setOrderField = (key: string, value: string): void => {
        this.order[key] = value
    }

    get notes(): any { 
        let result: string[] = []
        if (this.currentRestaurant) {
            let notes = this.currentRestaurant.dishes.map( dish => dish.section)
            notes.forEach(note => {
                if (!result.includes(note))
                    result.push(note)
            })
        }
        return result.map((value: string, index: number) => {return {_id: index, value}})
    }

    get dishes(): Array<CartDish> {
        return this.currentRestaurant ? this.currentRestaurant.dishes : []
    }

    get cartCount(): number {
        let sum: number = 0
        this.cart.dishes.forEach(value => sum += value.count)
        return sum
    }

}

export default new Store()
