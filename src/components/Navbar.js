import React from 'react';
import './Navbar.css';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <div className="logo">Q tify</div>
        <img src="" alt="" />
      </div>
      <div className='search-box'>
        <div className="styled-input">
          <input
            id="outlined-basic"
            type="text"
            placeholder="Search an album of your choice"
            className="styled-input-field"
          />
          <InputAdornment position="end">
            <SearchOutlinedIcon className="search-icon" />
          </InputAdornment>
        </div>
      </div>
      <div className="menu">
        <button className="menu-button">Give Feedback</button>
      </div>
    </div>
  )
}
