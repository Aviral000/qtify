import React, { useState } from 'react';
import './Navbar.css';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import logo from '../assests/qtrp-logo.png';

export default function Navbar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <div className="logo">Q tify</div>
        <img className='logo-position' src={logo} alt="" />
      </div>
      <div className='search-box'>
        <div className="styled-input">
          <input
            id="outlined-basic"
            type="text"
            placeholder="Search an album of your choice"
            className="styled-input-field"
            value={searchValue}
            onChange={handleInputChange}
          />
          <InputAdornment position="end" className="search-icon">
            <IconButton aria-label="search">
              <SearchOutlinedIcon />
            </IconButton>
          </InputAdornment>
        </div>
      </div>
      <div className="menu">
        <button className="menu-button">Give Feedback</button>
      </div>
    </div>
  );
}
