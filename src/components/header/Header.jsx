import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cart/CartIcon'
import './header.scss'

const Header = () => {
  return (
    <nav className='nav-menu container'>
        <div className='log'>
            <Link to ='/'>Ridge-techs</Link>
        </div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/shop'>shop</Link>
            </li>
            <li>
                <CartIcon/>
            </li>
        </ul>
    </nav>
  )
}

export default Header