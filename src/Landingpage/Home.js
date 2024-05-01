import React from 'react'
import './Home.css'
import Header from '../Header/Header'

import img_rectangle_3 from '../Image/img_rectangle_3.png'
import img_polygon_2 from '../Image/img_polygon_2.svg'
import img_rectangle_6 from '../Image/img_rectangle_6.png'
import img_rectangle_7 from '../Image/img_rectangle_7.png'
import img_rectangle_8 from '../Image/img_rectangle_8.png'
import img_rectangle_9 from '../Image/img_rectangle_9.png'
import img_rectangle_12 from '../Image/img_rectangle_12.png'
import img_rectangle_11 from '../Image/img_rectangle_11.png'
import img_rectangle_13 from '../Image/img_rectangle_13.png'
import img_rectangle_15 from '../Image/img_rectangle_15.png'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <>
  <Header/>
    <div className="stacklinetwo">
      <div className="columnlinetwo">
        <img src={img_rectangle_3} alt="image" className="image" />
        <div className="landing-page__line"></div>
      </div>
      <div className="column">
        <h1 className="column__title ui heading size-s">BUILD...</h1>
      </div>
      <img src={img_polygon_2} alt="polygontwo" className="landing-page__polygon-image" />
      <div className="column-1">
        <h2 className="column__title-1 ui heading size-s">HIRE...</h2>
      </div>
      <h2 className="landing-page__setup ui heading size-s">SETUP...</h2>
    </div>
    <h2 class="landing-page__description  size-md">
          Offering Services for <br />Organizational Development and Growth
        </h2>
    <div className="landing-page__grid">
  <div className="landing-page__stacktext">
    <img
      src={img_rectangle_6}
      alt="image"
      className="landing-page__stacktext__image"
    />
 <button className="third uibutton size-sm fill round">
 Team Building
      </button>
  </div>
  <div className="landing-page__stacktext">
    <img
      src={img_rectangle_7}
      alt="image"
      className="landing-page__stacktext__image"
    />
  
    <button className="third uibutton size-sm fill round">
    Hiring Candidates
      </button>
  </div>
  <div className="landing-page__stacktext">
    <img
      src={img_rectangle_8}
      alt="image"
      className="landing-page__stacktext__image"
    />
    
    <button className="third uibutton size-sm fill round">
    Payroll Management
      </button>
  </div>
  <div className="landing-page__stacktext">
    <img
      src={img_rectangle_9}
      alt="image"
      className="landing-page__stacktext__image"
    />
   
    <button className="third uibutton size-sm fill round">
    Leadership Hiring
      </button>
  </div>
  <div className="row">
    <div className="columnbuilding">
      <img
        src={img_rectangle_15}
        alt="image"
        className="image-2"
      />
      
       
        <button className="third uibutton size-sm fill round">
        Building Extended
          <br />
          Team
      </button>
      
    </div>
  </div>
  <div className="row">
    <div className="columnbuilding">
      <img
        src={img_rectangle_11}
        alt="image"
        className="image-2"
      />
      <button className="third uibutton size-sm fill round">
        Third Party
        <br />
        Arrangement
      </button>
    </div>
  </div>
  <div className="rowsetup_office">
    <div className="columnbuilding">
      <img
        src={img_rectangle_12}
        alt="image"
        className="image-2"
      />
      <button className="third uibutton size-sm fill round">
        Setup Office
      </button>
    </div>
  </div>
  <div className="rowsetup_office">
    <div className="columnbuilding">
      <img
        src={img_rectangle_13}
        alt="image"
        className="image-2"
      />
      <button className="third uibutton size-sm fill round">Branding</button>
    </div>
  </div>
</div>
<div className="rowdynamictext">
  <div className="list">
    <div className="list__item">
      <h1 className="list__item__text ui heading size-s">
        Optimize <br />
        Cost
      </h1>
    </div>
    <div className="list__item--execution">
      <h2 className="list__item--execution__text ui heading size-s">
        Execution <br />
        Strategy
      </h2>
    </div>
    <div className="rowstreamlining">
      <h2 className="streamlining ui heading size-s">
        Streamlining
        <br />
        Business
      </h2>
    </div>
  </div>
</div>
<div className="row_one">
  <div className="clientele-section">
    <div className="clientele-section__column">
      <div className="clientele-section__column--text">
        <h1 className="clientele-section__title ui heading size-s">
          Our Clientele
        </h1>
        <div className="clientele-section__quote">
          <h2 className="clientele-section__quote-mark ui heading size-xl">
            “
          </h2>
          <h3 className="clientele-section__quote-text ui heading size-s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sagittis dolor vitae erat porta, id accumsan diam consectetur. Sed
            sollicitudin interdum suscipit.
          </h3>
        </div>
      </div>
      <div className="clientele-section__logos">
        <div id="slider" className="clientele-section__slider swiper">
          <div className="swiper-wrapper">
            <div className="flex-col-center-center clientele-section__logo-item swiper-slide">
              <h4 className="clientele-section__logo ui heading size-s">
                LOGO
              </h4>
            </div>
            <div className="flex-col-center-center clientele-section__logo-item swiper-slide">
              <h5 className="clientele-section__logo ui heading size-s">
                LOGO
              </h5>
            </div>
            <div className="flex-col-center-center clientele-section__logo-item swiper-slide">
              <h6 className="clientele-section__logo ui heading size-s">
                LOGO
              </h6>
            </div>
            <div className="flex-col-center-center clientele-section__logo-item swiper-slide">
              <h1 className="clientele-section__logo ui heading size-s">
                LOGO
              </h1>
            </div>
            <div className="flex-col-center-center clientele-section__logo-item swiper-slide">
              <h1 className="clientele-section__logo ui heading size-s">
                LOGO
              </h1>
            </div>
          </div>
        </div>
        <div
          id="slider-pagination"
          className="clientele-section__pager-indicator"
        />
      </div>
    </div>
  </div>
</div>

<Footer/>

    </>

  )
}
