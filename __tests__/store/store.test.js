import React from 'react'
import { Store } from '../../src/store/store'
import { rests } from '../../src/store/restaurants'
import {CartDish, Dish} from "../../src/store/types";

describe('Store:', () => {

  let store

  beforeEach(() => {
    store = new Store()
    store.setRestaurant(rests[0])
  })

  afterEach(() => {
    store = null
  })

  test('should be defined', () => {
    expect(store).toBeDefined()
  })

  describe('setRestaurants:', () => {

    test('should set current restaurant', () => {
      expect(store.currentRestaurant).toBeDefined()
      expect(store.currentRestaurant).toEqual({...rests[0], dishes: rests[0].dishes.map(dish => {return {...dish, count: 0}})})
    })

    test('should set prev restaurant equal cur restaurant and set new cur restaurant', () => {
      store.setRestaurant(rests[1])
      expect(store.currentRestaurant).toBeDefined()
      expect(store.previousRestaurant).toBeDefined()
      expect(store.currentRestaurant).toEqual({...rests[1], dishes: rests[1].dishes.map(dish => {return {...dish, count: 0}})})
      expect(store.previousRestaurant).toEqual({...rests[0], dishes: rests[0].dishes.map(dish => {return {...dish, count: 0}})})
    })

    test('should set cur restaurant equal prev restaurant and null prev restaurant', () => {
      store.setRestaurant(rests[1])
      store.setRestaurant(rests[0])
      expect(store.currentRestaurant).toBeDefined()
      expect(store.previousRestaurant).toEqual(null)
      expect(store.currentRestaurant).toEqual({...rests[0], dishes: rests[0].dishes.map(dish => {return {...dish, count: 0}})})
    })

    test('should set new cur restaurant', () => {
      store.setRestaurant(rests[1])
      store.setRestaurant(rests[2])
      expect(store.currentRestaurant).toBeDefined()
      expect(store.previousRestaurant).toBeDefined()
      expect(store.currentRestaurant).toEqual({...rests[2], dishes: rests[2].dishes.map(dish => {return {...dish, count: 0}})})
      expect(store.previousRestaurant).toEqual({...rests[0], dishes: rests[0].dishes.map(dish => {return {...dish, count: 0}})})
    })

  })

  describe('clearPreviousRestaurant:', () => {

    test('should null prev restaurant', () => {
      store.clearPreviousRestaurant()
      expect(store.previousRestaurant).toBe(null)
    })
  })

  describe('setCurrentRestaurantNull:', () => {

    test('should null cur restaurant', () => {
      store.setCurrentRestaurantNull()
      expect(store.currentRestaurant).toBe(null)
    })
  })

  describe('setDishCount:', () => {

    let dish
    beforeEach(() => {
      dish = rests[0].dishes[0]
      store.setDishCount(dish, 2)
    })
    test('should set count of dish', () => {
      expect(store.currentRestaurant.dishes.find(value => value._id === dish._id)).toBeTruthy()
    })

    test('should not find expected dish', () => {
      expect(store.currentRestaurant.dishes.find(value => value._id === rests[0].dishes[1]._id) | false).not.toBeTruthy()
    })
  })

  describe('setCart:', () => {

    const dishes = rests[0].dishes
    test('should return cart in initial state', () => {
      store.setCart(dishes[0], 0)
      expect(store.cart.dishes).toHaveLength(0)
      expect(store.cart.cartCost).toBe(0)
    })

    test('should return cart with 1 dish', () => {
      store.setCart(dishes[0], 1)
      expect(store.cart.dishes).toHaveLength(1)
      expect(store.cart.cartCost).toBeGreaterThan(0)
    })

    test('should return cart with 2 same dishes', () => {
      store.setCart(dishes[0], 2)
      expect(store.cart.dishes).toHaveLength(1)
      expect(store.cart.cartCost).toBeGreaterThan(0)
    })

    test('should return cart with 2 diferent dishes', () => {
      store.setCart(dishes[0], 2)
      store.setCart(dishes[1], 1)
      expect(store.cart.dishes).toHaveLength(2)
      expect(store.cart.cartCost).toBeGreaterThan(0)
    })

    test('should return delete dish from the cart', () => {
      store.setCart(dishes[0], 2)
      expect(store.cart.dishes).toHaveLength(1)
      expect(store.cart.cartCost).toBeGreaterThan(0)
      store.setCart(dishes[0], 0)
      expect(store.cart.dishes).toHaveLength(0)
      expect(store.cart.cartCost).toBe(0)
    })
  })

  describe('clearCart:', () => {

    test('should set cart at initial state', () => {
      store.clearCart()
      expect(store.cart).toBeDefined()
      expect(store.cart.cartCost).toBe(0)
      expect(store.cart.dishes).toHaveLength(0)
    })
  })

  describe('setOrderField:', () => {

    test('should set order field', () => {
      const key = 'Адресс доставки'
      const value = 'ул. Бригадная'
      store.setOrderField('Адресс доставки', 'ул. Бригадная')
      expect(store.order).toBeDefined()
      expect(store.order[key]).toBe(value)
    })
  })

  describe('notes:', () => {

    test('should return array of notes', () => {
      expect(store.notes).toBeDefined()
      expect(store.notes[0].title).toBe('Пицца')
      expect(store.notes[1].title).toBe('Салаты')
      expect(store.notes[2].title).toBe('Десерты')
      expect(store.notes[3].title).toBe('Роллы')
    })

    test('should return void array', () => {
      store.setCurrentRestaurantNull()
      expect(store.notes).toHaveLength(0)
    })

  })

  describe('dishes:', () => {

    test('should return void array', () => {
      store.setCurrentRestaurantNull()
      expect(store.dishes).toHaveLength(0)
    })

    test('should return array of dishes', () => {
      expect(store.dishes.length).toBeGreaterThan(0)
    })
  })

  describe('cartCount:', () => {
    test('should return amount of dishes in the cart', () => {
      store.setCart(rests[0].dishes[0], 1)
      store.setCart(rests[0].dishes[0], 2)
      store.setCart(rests[0].dishes[1], 1)
      expect(store.cartCount).toBeGreaterThan(0)
      expect(store.cartCount).toBe(3)
    })
  })
});
