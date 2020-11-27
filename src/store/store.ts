import {makeAutoObservable} from 'mobx';
import { rests } from './restaurants';
import { Dish, CartDish, Cart, Restaurant, CartRestaurant, DishLayout, MapType } from "./types"

export class Store {

    user = null

    restaurants: Restaurant[] = rests
    currentRestaurant: CartRestaurant | null = null
    previousRestaurant: CartRestaurant | null = null
    
    dishesWithLayouts: DishLayout[] | [] = []

    scroll = {
        x: 0,
        y: 0
    }

    scrollRef: any 
    cart: Cart = {
        cartCost: 0,
        dishes: []
    }

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
        this.dishesWithLayouts = []
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

    setCurrentRestaurantNull = (): void => {
        this.currentRestaurant = null
    }

    setDishCount = (dish: CartDish, counter: number): void => {
        let foundedDish = this.currentRestaurant ? (this.currentRestaurant.dishes.find((value:CartDish) => value._id === dish._id)) : false
        if (foundedDish) foundedDish.count = counter
    }

    // pushCart = (dish:CartDish):void => {
    //     this.cart.dishes.push(dish)
    //     this.cart.cartCost += dish.count * dish.cost
    // }

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

    setDishesWithLayouts = (dishWithLayouts: DishLayout): void => {
        if (!this.dishesWithLayouts?.find(value => value._id === dishWithLayouts._id)) {
            this.dishesWithLayouts = [...this.dishesWithLayouts, dishWithLayouts]
        }
    }

    setScroll = ({x ,y}: {x: number, y:number}): void => {
        
        this.scrollRef.scrollTo({x, y, animated: true})
    }

    setScrollRef = (ref: any): void => {
        this.scrollRef = ref
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
        if (this.dishesWithLayouts.length === 0)
            return result.map((value: string, index: number) => {return {_id: index, title: value}})
        else {
            const array = this.dishesWithLayouts.slice().sort((first: DishLayout, second: DishLayout) => first.y - second.y)
            return result.map((value: string, index: number) => {
                return {
                    _id: index, 
                    title: value, 
                    dishX: array.find(dish => dish.section === value)?.x,
                    dishY: array.find(dish => dish.section === value)?.y,
                }
            })
        }
        
    }

    get dishes(): Array<CartDish> | [] {
        return this.currentRestaurant ? this.currentRestaurant.dishes : []
    }

    get cartCount(): number {
        let sum: number = 0
        this.cart.dishes.forEach(value => sum += value.count)
        return sum
    }

}

export default new Store()
