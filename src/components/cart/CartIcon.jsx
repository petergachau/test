import React from 'react'
import shoppingBag from '../../assets/shopping-bag.png'
import './cart-icon.scss'

const CartIcon = () => {
  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt ='cart'/>
      <span children='cart-count'>1</span>
    </div>
  )
}

export default CartIcon