import React from 'react';
import "./HeroSection.css";
import HeroImage from "../assests/vibrating-headphone 1.png"

export default function HeroSection() {
  return (
    <div>
      <div className='hero-body'>
        <div className='hero-heading'>
            <div className='hero-headingtext'>
                <div>100 Thousand Songs, ad-free</div>
                <div>Over thousands podcast episodes</div>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="headphones" />
        </div>
      </div>
    </div>
  )
}
