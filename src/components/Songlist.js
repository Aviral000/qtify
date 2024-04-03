import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Albumlist from './Albumlist';
import SongGenres from './SongGenres';

export default function Songlist() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [textAvail, setTextAvail] = useState(false);

  const handleSearch = (result) => {
    setSearchTerm(result);
  };

  const handleAlbumList = (ablum) => {
    setSearchResult(ablum);
  }

  const handleSearchAvail = () => {
    if(searchTerm === '') {
      setTextAvail(false);
    } else {
      setTextAvail(true);
    }
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} setTextAvail={setTextAvail} />
      <HeroSection />
      <hr />
      <Albumlist searchResult={handleAlbumList} searchTerm={searchTerm}  />
      <SongGenres />
    </div>
  )
}
