import React from 'react'
import './Header.css'
import { useNavigate} from 'react-router-dom';
import img_facebook from '../Image/img_facebook.png'
import img_instagram from '../Image/img_instagram.png'
import img_linkedin_circled from '../Image/img_linkedin_circled.png'
import img_youtube from '../Image/img_youtube.png'
import img_male_user from '../Image/img_male_user.png'
import img_shopping_cart from '../Image/img_shopping_cart.png'

function Header() {
  const Navigate =useNavigate()
// const[]  
  return (
    <header className="header">
        <div className="header__top-row">
          <div className="header__socials">
            <a href="#">
              <img src={img_instagram} alt="instagram" className="header__socials__instagram" />
            </a>
            <a href="#">
              <img src={img_facebook} alt="facebook" className="header__socials__instagram" />
            </a>
            <a href="#">
              <img src={img_linkedin_circled} alt="linkedin" className="header__socials__instagram" />
            </a>
            <a href="#">
              <img src={img_youtube}alt="youtube" className="header__socials__instagram" />
            </a>
          </div>
          <div className="header__actions">
            <div className="header__user">
              <a href="#">
                <img src={img_male_user} alt="maleuser" className="header__socials__instagram" />
              </a>
              <h6 className="header__user__signin ui heading size-xs">Sign in</h6>
            </div>
            <button className="header__actions__join ui button size-xs fill">Join</button>
            <div onClick={()=>Navigate('/cart')}>
            <a href="#">
              <img src={img_shopping_cart} alt="shoppingcart" className="header__actions__cart-icon" />
            </a>
            <h6 className="header__actions__cart-text ui heading size-xs">Cart</h6>
            </div>
          </div>
        </div>
        <div className="header__main-row">
          <h1 className="header__brand ui heading size-lg">
            <span className="header__brand-span"> A</span>
            <span className="header__brand-span-1"> B</span>
            <span className="header__brand-span-2"> D</span>
          </h1>
          <ul className="header__navigation">
            <li>
              <a href="#">
                <div className="header__navigation__item">
                  <h6 className="ui heading size-xs" onClick={()=>Navigate('/home')} >Home</h6>
                  <div className="header__navigation__item__home-indicator" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <h6 className="ui heading size-xs" onClick={()=>Navigate('/About')}>Services</h6>
              </a>
            </li>
            <li>
              <a href="#">
                <h6 className="ui heading size-xs">Pricing</h6>
              </a>
            </li>
            <li>
              <a href="#">
                <h6 className="ui heading size-xs">Branding</h6>
              </a>
            </li>
          </ul>
        </div>
      </header>

  )
}

export default Header