import {observable, action, makeAutoObservable} from 'mobx';

interface Dish {
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
    time: number
    address: string
    flat: number
    intercom: number //домофон
    porch: number //подъезд
    floor: number
    comment: string
    promoCode: string
}

interface Restaurant {
    name: string
    deliveryTime: string
    deliveryCost: number
    img: string
    dishes: Dish[]
}

type Component = 'Main' | 'Profile' | 'Restaurant' | 'Cart' | 'Order'
type Section = 'Пицца' | 'Роллы' | 'Напитки' | 'Бургеры' | 'Паста' | 'Горячие блюда' | 'Свежий хлеб' | 'Десерты' | 'Паста' | 'Алкоголь' | 'Салаты' | 'Сэндвичи с картофелем фри' | 'Гриль'


class Store {

    componentName: Component = 'Main'
    restaurants: Restaurant[] = [
        {name: 'Паццо', deliveryTime: '50-60 мин.', deliveryCost: 500, img: '', dishes: [
            {title: 'Маргарита', description: 'с соусом из помидор, сыром моцарелла и базиликом', section: 'Пицца', cost: 320, img: ''},
            {title: 'Паццо', description: 'салями сальсичча, ветчина, микс из грибов - портобелло, шампиньоны, вешенки, сладкий зеленый перец, маслины, сыр моцарелла', section: 'Пицца', cost: 405, img: ''},
            {title: 'Барбекю', description: 'маринованная свинина, бекон, карамелизированный лук, соус BBQ, сыр моцарелла', section: 'Пицца', cost: 405, img: ''},
            {title: 'Цезарь с курицей', description: 'филе куриное, яйцо перепелиные, помидор черри, соус Цезарь, листья салатные', section: 'Салаты', cost: 365, img: ''},
            {title: 'Греческий', description: 'со свежими овощами и сыром фета', section: 'Салаты', cost: 335, img: ''},
            {title: 'Фаджоли', description: 'с курицей, жареными шампиньонами, красной фасолью, маринованными огурцами, заправленный фирменным майонезом', section: 'Салаты', cost: 335, img: ''},
            {title: 'Ореховое мороженное', description: 'шарики ванильного и шоколадного мороженного с бисквитиками, карамельным соусом и ассорти орехов', section: 'Десерты', cost: 255, img: ''},
            {title: 'Шоколадный взрыв', description: 'шоколадное мороженное с драже из белого и темного шоколада с бисквитиками и карамельным соусом', section: 'Десерты', cost: 280, img: ''},
            {title: 'Карамельная фантазия', description: 'ванильное мороженое с бисквитиками под карамельным соусом', section: 'Десерты', cost: 260, img: ''},
            {title: 'Филадельфия', description: 'с лососем и сливочными сыром', section: 'Роллы', cost: 330, img: ''},
            {title: 'Калифорния', description: 'с мясом краба, огурцом, авокадо, майонезом, икрой летучей рыбы', section: 'Роллы', cost: 395, img: ''},
            {title: 'Семейный', description: 'с копченым угрем, мясом морских рачков и кунжутом', section: 'Роллы', cost: 375, img: ''},
            {title: 'Самурай', description: 'с лососем, тунцом, огурцом и соусом "спайси"', section: 'Роллы', cost: 295, img: ''},
            
        ]},
        {name: 'Овсянка', deliveryTime: '50-60 мин.', deliveryCost: 400, img: '', dishes: [
            {title: 'Греческий', description: 'со спелыми помидорами, огурцами и сыром фета', section: 'Салаты', cost: 340, img: ''},
            {title: 'Оливье с лососем', description: 'зеленый горошек, лосось, соленые огурцы, морковь, соус "Майонез"', section: 'Салаты', cost: 375, img: ''},
            {title: 'Зеленый', description: 'с цукини, карамелизированным фенхелем, морковью, миксом из салатных листьев и тахиновым соусом', section: 'Салаты', cost: 315, img: ''},
            {title: 'Цыпленок', description: 'мясо цыпленка на гриле с картофелем, обжаренным с луком и соусом из печеных помидоров', section: 'Горячие блюда', cost: 495, img: ''},
            {title: 'Стейк из свинины на гриле', description: 'с дольками запеченного картофеля и карамелизированным луком и перцем', section: 'Горячие блюда', cost: 495, img: ''},
            {title: 'Медальоны из говядины на гриле', description: 'с чечевицей, печеным луком-шалот и соусом блю-чиз', section: 'Горячие блюда', cost: 625, img: ''},
            {title: 'Мохито с зеленым чаем', description: '', section: 'Напитки', cost: 185, img: ''},
            {title: 'Американо', description: '', section: 'Напитки', cost: 100, img: ''},
            {title: 'Капучино', description: '', section: 'Напитки', cost: 155, img: ''},
            {title: 'Сэндвич в хрустящем круассане с лососем', description: 'со свежим гурцом, салатом айсберг, сливочно-сырным соусом', section: 'Сэндвичи с картофелем фри', cost: 355, img: ''},
            {title: 'Сэндвич в итальянской чиабатте', description: 'с курицей, беконом, томатами, корнишонами и сливочным сыром', section: 'Сэндвичи с картофелем фри', cost: 325, img: ''},
            {title: 'Брускетта', description: 'с паштетом из куриной печени и брусничным конфитюром', section: 'Сэндвичи с картофелем фри', cost: 325, img: ''},

        ]},
        {name: 'KITCHEN MARKET', deliveryTime: '50-60 мин.', deliveryCost: 500, img: '', dishes: [
            {title: 'Овощной', description: 'с помидорами, огурцами, крем-сыром, красным луком и мятой', section: 'Салаты', cost: 365, img: ''},
            {title: 'Цезарь с курицей', description: 'филе куриное, яйцо перепелиные, помидор черри, соус Цезарь, листья салатные', section: 'Салаты', cost: 410, img: ''},
            {title: 'Ореховый', description: 'с курицей, запеченной на гриле, с фенхелем, грецким орехом и миксом из салатных листьев', section: 'Салаты', cost: 360, img: ''},
            {title: 'Свиной стейк', description: 'с картошкой, жаренной с луком', section: 'Гриль', cost: 510, img: ''},
            {title: 'Кебаб из баранины', description: 'с лепешкой, хумусом и перечным соусом харисса', section: 'Гриль', cost: 490, img: ''},
            {title: 'Шашлык из баранины', description: 'с запеченным баклажаном и мятным соусом', section: 'Гриль', cost: 485, img: ''},
            {title: 'Клубника с фенхелем, с соусом из бузины и ванильным мороженым', description: '', section: 'Десерты', cost: 280, img: ''},
            {title: 'Хрустящая меренга с лаймовым чизкейком', description: '', section: 'Десерты', cost: 280, img: ''},
            {title: 'Наполеон', description: 'с черничным кремом и ананасовым мороженым', section: 'Десерты', cost: 280, img: ''},
            {title: 'ETE DE MORT', description: 'крепкий светлый бельгийский эль', section: 'Алкоголь', cost: 345, img: ''},
            {title: 'PUNK IPA', description: 'мягкий вкус с легкой сладостью солода и тропических фруктов, свежей и яркой хмелевой горечью, нотками сосны и цитрусовых', section: 'Алкоголь', cost: 310, img: ''},
            {title: 'Апельсиновый сок', description: '', section: 'Напитки', cost: 180, img: ''},
            {title: 'Яблочный сок', description: '', section: 'Напитки', cost: 180, img: ''},
            {title: 'Латте', description: '', section: 'Напитки', cost: 220, img: ''},
        ]},
    ]
    cart: Cart = {
        cartCost: 0,
        dishes: []
    }
    currentRestaurant: Restaurant | null = null

    constructor() {
        makeAutoObservable(this)
    }

    setComponent = (component: Component): void => {
         this.componentName = component;
         console.log()
     }
    
    setRestaurant = (restaurant: any): void => {
        this.currentRestaurant = restaurant
    }

    pushCart = (dish:any):void => {
        this.cart.dishes.push(dish)
        this.cart.cartCost += dish.count * dish.cost
    } 

    getNotes = (): Array<string> | void => { 
        if (this.currentRestaurant) {
            let result: string[] = []
            let dishSections = this.currentRestaurant.dishes.map( dish => dish.section)
            for (let arr of dishSections) {
                if (!result.includes(arr))
                    result.push(arr)
            }
            return result
        }
            
    }

}

export default new Store()