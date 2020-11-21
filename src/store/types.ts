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
    _id: number
    name: string
    deliveryTime: string
    deliveryCost: number
    img: string
    dishes: Dish[]
}

interface CartRestaurant extends Restaurant {
    dishes: CartDish[]
} 

interface DishLayout {
    _id: number
    section: Section
    x: number
    y: number
    width: number
    height: number
}

type Section = 'Пицца' | 'Роллы' | 'Напитки' | 'Бургеры' | 'Паста' | 'Горячие блюда' | 'Свежий хлеб' | 'Десерты' | 'Паста' | 'Алкоголь' | 'Салаты' | 'Сэндвичи с картофелем фри' | 'Гриль'
//enum 
type MapType = Record<string, string>

export { Dish, CartDish, Cart, Restaurant, CartRestaurant, DishLayout, MapType }