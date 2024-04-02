import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Albumlist from './Albumlist';
import SongGenres from './SongGenres';

export default function Songlist() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <hr />
      <Albumlist />
      <SongGenres />
    </div>
  )
}
