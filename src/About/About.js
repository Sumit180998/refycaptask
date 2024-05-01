import React from 'react'
import './About.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img_rectangle_30 from '../Image/img_rectangle_30.png'
import img_rectangle_18 from '../Image/img_rectangle_18.png'
import img_rectangle_19 from '../Image/img_rectangle_19.png'
import img_rectangle_20 from '../Image/img_rectangle_20.png'

export default function About() {
  return (
    <div>
        <Header/>
        <div className="group-18">
        <img src={img_rectangle_30} alt="rectangle 3" className="rectangle-3" />
        <div className="about-us__line" />
      </div>
      
      {/* about section */}
      <div className="section">
        <h1 className="section__title  size-3xl">About ABD</h1>
        <h2 className="section__description  size-lg">
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis dolor vitae erat porta, id accumsan
          diam consectetur. Sed sollicitudin interdum suscipit. Duis ornare dictum mi, in elementum odio consequat ac.
          Donec scelerisque lacinia pharetra. Phasellus malesuada dolor non venenatis malesuada. Etiam vulputate ac arcu
          ac interdum. Pellentesque condimentum justo eu nibh eleifend fringilla. Morbi interdum a purus quis malesuada.
          Nulla mollis urna quis ex accumsan egestas.
        </h2>
        <div className="section__list">
          <div className="about-us" style={{position:'relative'}}>
            <img src={img_rectangle_18} alt="rectangle 18" className="about-us__image" />
            <div className="about-us__content">
              <h2 className="about-us__content-title ui heading size-2xl" style={{color:'white',fontWeight:'bold'}}>Optimize <br />Cost</h2>
            </div>
          </div>
          <div className="about-us" style={{position:'relative'}}>
            <img src={img_rectangle_19} alt="rectangle 18" className="about-us__image" />
            
            <div className="about-us__content">
              <h2 className="about-us__content-title ui heading size-2xl" style={{color:'white',fontWeight:'bold'}}>Execution <br />Strategy</h2>
            </div>
          </div>
          <div className="about-us" style={{position:'relative'}}>
            <img src={img_rectangle_20} alt="rectangle 18" className="about-us__image" />
            <div className="about-us__content">
              <h2 className="about-us__content-title ui heading size-2xl"  style={{color:'white',fontWeight:'bold'}}>Streamlining<br />Business</h2>
            </div>
          </div>
        </div>
        <h2 className="section__additional-info  size-lg">
          Lorem Pellentesque maximus ultrices est, vel sodales arcu hendrerit ac. Morbi pellentesque purus nec dolor
          dignissim, sit amet pellentesque sem vulputate. Nam eu nulla nec erat sodales sollicitudin id et turpis. Fusce
          sollicitudin fermentum tempus. Praesent sed pulvinar ex. Nam ultricies, diam et tristique finibus, augue nisi
          dapibus nulla, et pharetra ex sem interdum leo. Suspendisse non urna eu ante cursus laoreet. Donec lacinia
          hendrerit tristique. Mauris massa mauris, vehicula et finibus non, consectetur vel sem. Curabitur porta velit
          sit amet commodo imperdiet. Ut rutrum nibh erat, accumsan pulvinar lectus porttitor vel. Sed condimentum nunc id
          risus tincidunt aliquet. Aenean finibus, orci vitae pretium porttitor, erat nunc maximus turpis, a viverra erat
          ipsum id lorem. Pellentesque in tellus pellentesque, interdum velit in, efficitur enim. Vivamus diam arcu,
          imperdiet id nulla in, scelerisque accumsan nulla. Mauris vestibulum nulla quis finibus pretium.<br  style={{ marginTop:"25px"}}/>Integer
          hendrerit magna tortor, nec dictum dolor eleifend vel. Integer in sollicitudin erat. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque scelerisque metus at ex ornare
          gravida. Cras condimentum turpis finibus tincidunt cursus. Pellentesque nulla arcu, luctus sed urna eget,
          lobortis pharetra lectus. Etiam neque sem, ultrices a nibh quis, vehicula interdum lectus. Nullam volutpat
          elementum commodo. Phasellus dapibus tellus vulputate, congue nibh quis, ullamcorper est. Fusce eget ullamcorper
          lectus. Morbi non hendrerit lorem. Vivamus molestie iaculis tortor a ultrices. Pellentesque maximus, urna id
          ultrices molestie, lacus tortor ullamcorper ante, ut rhoncus ipsum sapien eu mauris. Aenean condimentum in ante
          nec hendrerit.
        </h2>
      </div>
        <Footer/>
      
    </div>
  )
}
