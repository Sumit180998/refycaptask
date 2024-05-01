import React from 'react'
import './Career.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Rectangle_3 from '../Image/Rectangle_3.png'
import img_rectangle_90 from '../Image/img_rectangle_90.png'

export default function Career() {
  return (
    <div>
      <Header/>
      <img src={Rectangle_3} alt='Rectangle_3' className='Rectangle_3-1'/>
      <div className='about_line'></div>
      <div class="career__group">
      <h1 class="career__group__title ui heading size-3xl">Why Join ABD</h1>
    </div>
    <div className="career__content">
  <h1 className="career__content__text  size-lg">
    Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
    dolor vitae erat porta, id accumsan diam consectetur. Sed sollicitudin
    interdum suscipit. Duis ornare dictum mi, in elementum odio consequat ac.
    <br />
    Donec scelerisque lacinia pharetra. Phasellus malesuada dolor non venenatis
    malesuada. Etiam vulputate ac arcu ac interdum.
  </h1>
  <img
    src={img_rectangle_90}
    alt="rectangle 9"
    className="career__content__image"
  />
</div>
<div class="career__benefits-column">
      <h1 class="career__benefits-title ui heading size-2xl">Benefits</h1>
    </div>
    {/* benefits section */}
  <div className="career-section">
    <div className="career-section__group">
      <div className="career">
        <div className="career__profile">
          <div className="career__profile__image--first" />
          <div className="career__profile__image--first" />
          <div className="career__profile__image--first" />
        </div>
        <h1 className="career__description  size-lg">
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          sagittis dolor vitae erat porta, id accumsan diam consectetur.
          <br />
          Donec scelerisque lacinia pharetra. Phasellus malesuada dolor non
          venenatis malesuada. Etiam vulputate ac arcu ac interdum. <br />
          Pellentesque condimentum justo eu nibh eleifend fringilla. Morbi
          interdum a purus quis malesuada. Nulla mollis urna quis ex accumsan
          egestas.
        </h1>
      </div>
      <div className="career">
        <div className="career__profile">
          <div className="career__profile__image--first" />
          <div className="career__profile__image--first" />
          <div className="career__profile__image--first" />
        </div>
        <h2 className="career__description  size-lg">
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          sagittis dolor vitae erat porta, id accumsan diam consectetur.
          <br />
          Donec scelerisque lacinia pharetra. Phasellus malesuada dolor non
          venenatis malesuada. Etiam vulputate ac arcu ac interdum. <br />
          Pellentesque condimentum justo eu nibh eleifend fringilla. Morbi
          interdum a purus quis malesuada. Nulla mollis urna quis ex accumsan
          egestas.
        </h2>
      </div>
    </div>
  </div>
  <div className="career__section">
  <h1 className="career__title ui heading size-2xl">Current openings</h1>
  <div className="career__expandable-list">
    <details className="group-10" open="">
      <summary className="group-10">
        <h2 className="career__expandable-list-item__title ui heading size-xl">
          Frontend developer
        </h2>
        <h3 className="career__expandable-list-item__toggle ui heading size-4xl">
          +
        </h3>
      </summary>
      <p>Dummy content</p>
    </details>
    <details className="group-10">
      <summary className="group-10">
        <h2 className="career__expandable-list-item__title ui heading size-xl">
          Frontend developer
        </h2>
        <h3 className="career__expandable-list-item__toggle ui heading size-4xl">
          +
        </h3>
      </summary>
      <p>Dummy content</p>
    </details>
    <details className="group-10">
      <summary className="group-10">
        <h2 className="career__expandable-list-item__title ui heading size-xl">
          Frontend developer
        </h2>
        <h3 className="career__expandable-list-item__toggle ui heading size-4xl">
          +
        </h3>
      </summary>
      <p>Dummy content</p>
    </details>
    <details className="group-10">
      <summary className="group-10">
        <h2 className="career__expandable-list-item__title ui heading size-xl">
          Frontend developer
        </h2>
        <h3 className="career__expandable-list-item__toggle ui heading size-4xl">
          +
        </h3>
      </summary>
      <p>Dummy content</p>
    </details>
  </div>
  <button className="ui button size-xl fill round">Load More Openings</button>
</div>

      <Footer/>
    </div>
  )
}
