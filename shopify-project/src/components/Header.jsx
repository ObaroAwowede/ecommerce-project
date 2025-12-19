import { NavLink } from 'react-router';
import mobilelogowhite from '../assets/images/mobile-logo-white.png'
import logowhite from '../assets/images/logo-white.png'
import searchicon from '../assets/images/icons/search-icon.png'
import carticon from '../assets/images/icons/cart-icon.png'
import './Header.css'

export function Header( {cart} ) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity  += cartItem.quantity
  })
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to ="/" className="header-link">
            <img className="logo" src={logowhite}/>
            <img className="mobile-logo" src={mobilelogowhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={searchicon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={carticon} />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
