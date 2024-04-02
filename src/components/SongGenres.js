import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Box, Tab, Tabs } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./SongGenres.css";

const SwiperComponent = ({ songlist }) => {

    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={6}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {songlist !== undefined && songlist.length > 0 ? (
          songlist.map((album, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="swiper-card">
                <div className="swiper-body">
                  <img src={album.image} alt={album.title} />
                </div>
                <div className="album-name">{album.follows} Follows</div>
              </div>
              <div className="album-title">{album.title}</div>
            </SwiperSlide>
          ))
        ) : (
          <CircularProgress />
        )}
      </Swiper>
    );
};

export default function SongGenres() {
  const [songlist, setSongList] = useState([]);
  const [selectedSong, setSelectedSong] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [value, setValue] = React.useState(0);

  const apiRequestForSongs = async () => {
    const response = await axios.get("https://qtify-backend-labs.crio.do/songs");
    setSongList(response.data);
  }

  const apiRequestForGenres = async() => {
    const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
    setGenres(response.data.data);
  }

  useEffect(() => {
    apiRequestForGenres();
    apiRequestForSongs();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setSelectedGenre("All");
    } else if (newValue === 1) {
      setSelectedGenre("Jazz");
    } else if (newValue === 2) {
      setSelectedGenre("Rock");
    } else if (newValue === 3) {
      setSelectedGenre("Pop");
    } else if (newValue === 4) {
      setSelectedGenre("Blues");
    }
  };

  useEffect(() => {
    const handleSongAccToGenre = () => {
      if(selectedGenre === "All") {
        setSelectedSong(songlist);
      } else {
        const filteredSongs = songlist.filter(song => song.genre.label === selectedGenre);
        setSelectedSong(filteredSongs);
      }
    }
    
    handleSongAccToGenre();
  }, [selectedGenre, songlist]);

  return (
    <div style={{ margin: "1rem" }}>
      <div className='songs-heading'>
        Songs
      </div>
      <Box sx={{ width: '100%', marginLeft: "1rem" }}>
        <TabContext value={value}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            indicatorColor="primary"
            textColor="inherit"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#34C94B'
              },
              '& .MuiTab-root': {
                color: 'white',
                fontFamily: "'Poppins', sans-serif"
              }
            }}
          >
            <TabList variant="plain">
              <Tab label="All" value={0} />
              { genres.map((genre, index) => (
                <Tab label={genre.label} value={(index + 1)} key={genre.label} />
              ))}
            </TabList>
          </Tabs>
        </TabContext>
      </Box>
      {songlist.length === 0 || selectedSong.length === 0 ? (
        <div className='circularprogress'>
          <CircularProgress />
        </div>
      ) : (selectedGenre === "All" ? (
        <div className="swiper-container">
          <SwiperComponent
            songlist={songlist}
          />
        </div>
      ) :  (
        <div className="swiper-container">
          <SwiperComponent
            songlist={selectedSong}
          />
        </div>
      ))}
    </div>
  )
}