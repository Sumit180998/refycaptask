import React from 'react'
import './Footer.css'
import { useNavigate} from 'react-router-dom';

export default function Footer() {
  const Navigate =useNavigate()
  return (
    <div class="content__section__details">
    <div class="content__section__details__address">
      <h1 class="ui heading size-lg">
        <span class="content__section__details__address__heading-span"> A</span>
        <span class="content__section__details__address__heading-span-1"> B</span>
        <span class="content__section__details__address__heading-span-2"> D</span>
      </h1>
      <p class="content__section__details__address__description ui text size-xs">
        House No. Building Name,<br />Office No. Street Name,<br />City, State - PIN Code<br />Country
      </p>
    </div>
    <div class="content__section__info">
      <div class="content__section__info__about">
        <div class="content__section__info__branding">
          <div class="content__section__info__about__list">
            <h2 class="content__section__info__ads__title ui heading size-xs">About us</h2>
            <a  onClick={()=>Navigate("./Career")} target="_blank" rel="noreferrer" class="content__section__info__ads__title">
              <p class="ui text size-xs">Career</p>
            </a>
            
            <a href="#" class="content__section__info__ads__title">
            <p class="ui text size-xs" onClick={()=>Navigate('/Contect_Us')}>Contact us</p>
          </a>
          <a href="#">
            <p class="ui text size-xs">Privacy Policy</p>
          </a>
          <a href="#">
          <p class="content__section__info__ads__title ui text size-xs">Feedback</p>
          </a>
          </div>
        
        </div>
        <div class="content__section__info__branding">
          <div class="content__section__info__about__list">
            <h2 class="content__section__info__ads__title ui heading size-xs">Team Building</h2>
            <a href="Career" target="_blank" rel="noreferrer" class="content__section__info__ads__title">
              <p class="ui text size-xs">Leadership Hiring</p>
            </a>
            
            <a href="#" class="content__section__info__ads__title">
            <p class="ui text size-xs">Building Teams</p>
          </a>
          <a href="#">
            <p class="ui text size-xs">Hiring Candidates</p>
          </a>
         
          </div>
        
        </div>
        <div class="content__section__info__branding">
          <div class="content__section__info__about__list">
            <h2 class="content__section__info__ads__title ui heading size-xs">Services</h2>
            <a href="Career" target="_blank" rel="noreferrer" class="content__section__info__ads__title">
              <p class="ui text size-xs">Setup Office</p>
            </a>
            
            <a href="#" class="content__section__info__ads__title">
            <p class="ui text size-xs">Payroll Management</p>
          </a>
          <a href="#">
            <p class="ui text size-xs">Third Party Arrangements</p>
          </a>
          <a href="#">
          <p class="content__section__info__ads__title ui text size-xs">Consultancy</p>
          </a>
          </div>
        
        </div>
        <div class="content__section__info__branding">
          <div class="content__section__info__about__list">
            <h2 class="content__section__info__ads__title ui heading size-xs">Branding</h2>
            <a href="Career" target="_blank" rel="noreferrer" class="content__section__info__ads__title">
              <p class="ui text size-xs">Ads</p>
            </a>
            
            <a href="#" class="content__section__info__ads__title">
            <p class="ui text size-xs">Increasing Footprints</p>
          </a>
         
          </div>
        
        </div>
       
       
      </div>
    </div>
  </div>

  )
}
