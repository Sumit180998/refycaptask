import React from 'react'
import './Contect_Us.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img_rectangle_3_3 from '../Image/img_rectangle_3_3.png'


export default function Contect_Us() {
  return (
    <div>
        <Header/>
        <div className="group-38">
                <img
                     src={img_rectangle_3_3}
                alt="rectangle 3"
                     className="rectangle-3"
                       />
                    <div className="contact-us__line" />
                                </div>

                                
  {/* address section */}
  <div className="contact-section">
    <div className="contact-section__info">
      <div className="contact-section__address">
        <h1 className="contact-section__title ui heading size-xl">
          Visit us at
        </h1>
        <div className="contact-section__address-column">
          <h2 className="ui heading size-lg">India</h2>
          <p className="contact-section__address-details ui text size-s">
            House No. Building Name, Office No. Street Name, City, State - PIN
            Code
          </p>
        </div>
        <div className="contact-section__address-column-1">
          <h3 className="ui heading size-lg">USA</h3>
          <p className="contact-section__address-details ui text size-s">
            House No. Building Name, Office No. Street Name, City, State - PIN
            Code
          </p>
        </div>
      </div>
      <div className="contact-section__location">
        <h2 className="contact-section__title ui heading size-xl">Locate us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452697041917!2d78.39076592375736!3d17.43803374982052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9144cdba8c47%3A0x937fe346f411a645!2sTutorials%20Point%20(India)%20Ltd.!5e0!3m2!1sen!2sin!4v1673629212535!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contact-section__map"
        ></iframe>
      </div>
    </div>
  </div>



                             
  {/* contact form section */}
  <div className="contact-form">
    <div className="contact-form__content">
      <div className="contact-form__fields">
        <div className="contact-form__fields-group">
          <div className="contact-form__field-set">
            <div className="contact-form__field-set--personal">
              <div className="contact-form__field">
                <h1 className="contact-form__heading ui heading size-md">
                  Name *
                </h1>
                <label className="ui input size-xs fill round">
                  <input name="Rectangle 22" type="text" />
                </label>
              </div>
              <h2 className="contact-form__label--phone ui heading size-md">
                Mobile phone *
              </h2>
              <label className="contact-form__input--phone ui input size-xs fill round">
                <input name="Rectangle 24" type="text" />
              </label>
              <div className="contact-form__field--email">
                <h3 className="contact-form__heading ui heading size-md">
                  Email *
                </h3>
                <label className="ui input size-xs fill round">
                  <input name="Rectangle 26" type="text" />
                </label>
              </div>
            </div>
            <h4 className="contact-form__heading ui heading size-md">
              How can we help?
            </h4>
          </div>
          <div className="contact-form__fields-group--secondary">
            <div className="contact-form__field-set--company">
              <div className="contact-form__field--company">
                <h5 className="contact-form__heading ui heading size-md">
                  Company *
                </h5>
                <label className="ui input size-xs fill round">
                  <input name="Rectangle 23" type="text" />
                </label>
              </div>
              <div className="contact-form__field--services">
                <h6 className="contact-form__heading ui heading size-md">
                  Pin code *
                </h6>
                <label className="ui input size-xs fill round">
                  <input name="Rectangle 25" type="text" />
                </label>
              </div>
            </div>
            <div className="contact-form__field--services">
              <h5 className="contact-form__heading ui heading size-md">
                Services *
              </h5>
              <label className="ui input size-xs fill round">
                <input name="Rectangle 27" type="text" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <textarea
        className="contact-form__textarea ui textarea size-xs taroutlinebluegray10002 round"
        name="Rectangle 28"
        defaultValue={""}
      />
      <div className="contact-form__actions">
        <button className="contact-form__button--cancel ui button size-lg outline round undefined_undefined undefined_undefined_border">
          Cancel
        </button>
        <button className="contact-form__button--send ui button size-lg fill round">
          Send
        </button>
      </div>
    </div>
  </div>


        <Footer/>
      
    </div>
  )
}
