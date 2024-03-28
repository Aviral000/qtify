import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Albumlist from './Albumlist';

export default function Songlist() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <hr />
      <Albumlist />
    </div>
  )
}
