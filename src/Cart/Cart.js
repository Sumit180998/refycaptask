import React from 'react'
import './Cart.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img_rectangle_3_2 from '../Image/img_rectangle_3_2.png'
import img_pocket_watch from '../Image/img_pocket_watch.png'
import img_dollar_coin from '../Image/img_dollar_coin.png'
import img_user from '../Image/img_user.png'

export default function Cart() {
  return (
    <div>
        <Header/>

        <div className="group-43">
  <img
    src={img_rectangle_3_2}
    alt="rectangle 3"
    className="rectangle-3"
  />
  <div className="cart__line" />
</div>
        <div className="cart__summary">
            <h1 className="cart__title ui heading size-3xl">Our Basket</h1>
            <button className="ui button size-xl fill round">Proceed to Checkout</button>
            </div>

            <div className="cart">
  <div className="cart__content">
    <div className="cart__content__background" />
    <div className="cart__pricing">
      <p className="cart__pricing__title ui text size-lg">Pricing One</p>
      <p className="cart__pricing__package ui text size-s">Package two</p>
      <div className="cart__pricing__details">
        <div className="cart__pricing__options">
          <div className="cart__pricing__option">
            <img
              src={img_pocket_watch }
              alt="pocket watch"
              className="cart__pricing__option__image"
            />
            <h1 className="ui heading size-lg">$60 - $120 / hr</h1>
          </div>
          <div className="cart__pricing__option">
            <img
              src={img_dollar_coin}
              alt="dollar coin"
              className="cart__pricing__option__image"
            />
            <h2 className="ui heading size-lg">$12,000 to $60,000</h2>
          </div>
          <div className="cart__pricing__option">
            <img
              src={img_user}
              alt="user"
              className="cart__pricing__option__image"
            />
            <h3 className="cart__pricing__option__team-size ui heading size-lg">
              10 - 70
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="cart__features">
      <h2 className="cart__features__title ui heading size-2xl">
        Features and Benefits
      </h2>
      <p className="cart__features__description ui text size-s">
        Lorem Lorem ipsum dolor sit amet.
        <br />
        Duis sagittis dolor vitae erat porta
        <br />
        Donec scelerisque lacinia pharetra
        <br />
        Pellentesque condimentum justo eu nibh eleifend fringilla.
        <br />
        Lorem Lorem ipsum dolor sit amet.
        <br />
        Duis sagittis dolor vitae erat porta
        <br />
        Donec scelerisque lacinia pharetra
        <br />
        Pellentesque condimentum justo eu nibh eleifend fringilla.
      </p>
      <div className="cart__features__actions">
        <button className="cart__features__action--save ui button size-sm outline undefined_undefined undefined_undefined_border">
          Save for later
        </button>
        <button className="cart__features__action--delete ui button size-sm outline undefined_undefined undefined_undefined_border">
          Delete
        </button>
      </div>
    </div>
  </div>
</div>

<div className="cart">
  <div className="cart__content">
    <div className="cart__content__background" />
    <div className="cart__pricing">
      <p className="cart__pricing__title ui text size-lg">Pricing Two</p>
      <p className="cart__pricing__package ui text size-s">Package one</p>
      <div className="cart__pricing__details">
        <div className="cart__pricing__options">
          <div className="cart__pricing__option">
            <img
              src={img_pocket_watch}
              alt="pocket watch"
              className="cart__pricing__option__image"
            />
            <h1 className="ui heading size-lg">$60 - $120 / hr</h1>
          </div>
          <div className="cart__pricing__option">
            <img
              src={img_dollar_coin}
              alt="dollar coin"
              className="cart__pricing__option__image"
            />
            <h2 className="ui heading size-lg">$12,000 to $60,000</h2>
          </div>
          <div className="cart__pricing__option">
            <img
              src={img_user}
              alt="user"
              className="cart__pricing__option__image"
            />
            <h3 className="cart__pricing__option__team-size ui heading size-lg">
              10 - 70
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="cart__features">
      <h2 className="cart__features__title ui heading size-2xl">
        Features and Benefits
      </h2>
      <p className="cart__features__description ui text size-s">
        Lorem Lorem ipsum dolor sit amet.
        <br />
        Duis sagittis dolor vitae erat porta
        <br />
        Donec scelerisque lacinia pharetra
        <br />
        Pellentesque condimentum justo eu nibh eleifend fringilla.
        <br />
        Lorem Lorem ipsum dolor sit amet.
        <br />
        Duis sagittis dolor vitae erat porta
        <br />
        Donec scelerisque lacinia pharetra
        <br />
        Pellentesque condimentum justo eu nibh eleifend fringilla.
      </p>
      <div className="cart__features__actions">
        <button className="cart__features__action--save ui button size-sm outline undefined_undefined undefined_undefined_border">
          Save for later
        </button>
        <button className="cart__features__action--delete ui button size-sm outline undefined_undefined undefined_undefined_border">
          Delete
        </button>
      </div>
    </div>
  </div>
</div>  

<div class="cart__column">
      <button class="cart__button ui button size-xl fill round">Proceed to Checkout</button>
    </div>

        <Footer/>
      
    </div>
  )
}
