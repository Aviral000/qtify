// import React, { useState, useEffect } from 'react';
// import "./Albumlist.css";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import axios from "axios";
// import "./grid1.styles.css";

// export default function Albumlist() {
//   const [albumlist, setAlbumlist] = useState([]);
//   const [partialList, setPartialList] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [newAlbumList, setNewAlbumList] = useState([]);
//   const [newPartialList, setNewPartialList] = useState([]);
//   const [showNewAll, setShowNewAll] = useState(false);

//   const ApiCallForAlbums = async () => {
//     try {
//       const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
//       setAlbumlist(response.data);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const ApiCallForNewAlbums = async () => {
//     try {
//       const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
//       setNewAlbumList(response.data);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   useEffect(() => {
//     ApiCallForAlbums();
//     ApiCallForNewAlbums();
//   }, []);

//   useEffect(() => {
//     const collapseList = () => {
//       const list = albumlist.slice(0, 6);
//       setPartialList(list);
//     };

//     if (!showAll) {
//       collapseList();
//     } else {
//       setPartialList(albumlist);
//     }
//   }, [showAll, albumlist]);

//   useEffect(() => {
//     const collapseNewList = () => {
//       const list = newAlbumList.slice(0, 6);
//       setNewPartialList(list);
//     };

//     if (!showNewAll) {
//       collapseNewList();
//     } else {
//       setNewPartialList(newAlbumList);
//     }
//   }, [showNewAll, newAlbumList]);

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   const toggleShowNewAll = () => {
//     setShowNewAll(!showNewAll);
//   };

//   const texttoggler = () => {
//     return showAll ? "Collapse" : "Show All";
//   }

//   const newTexttoggler = () => {
//     return showNewAll ? "Collapse" : "Show All";
//   }

//   return (
//     <div style={{ margin: "1rem" }}>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div className='album-heading'> Top Albums </div>
//         <div style={{ marginRight: "2rem", color: "white" }}>
//           <Button onClick={toggleShowAll} style={{ color: "white" }}>{texttoggler()}</Button>
//         </div>
//       </div>
//       <div className="grid-container">
//         {(showAll ? albumlist : partialList).map((album) => (
//           <div className="top-album-card" key={album.id}>
//             <div className="grid-item">
//               <Card className="card">
//                 <CardContent style={{ padding: 0 }}>
//                   <div>
//                     <img src={album.image} alt={album.title} />
//                   </div>
//                 </CardContent>
//               </Card>
//               <div>
//                 <div className='album-name'>
//                   {album.follows} Follows
//                 </div>
//               </div>
//             </div>
//             <div className='album-title'>
//               {album.title}
//             </div>
//           </div>
//         ))}
//       </div>
//       <hr color='#34C94B' />
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div className='album-heading'> New Albums </div>
//         <div style={{ marginRight: "2rem", color: "white" }}>
//           <Button onClick={toggleShowNewAll} style={{ color: "white" }}>{newTexttoggler()}</Button>
//         </div>
//       </div>
//       <div className="grid-container">
//         {(showNewAll ? newAlbumList : newPartialList).map((album) => (
//           <div className="new-album-card" key={album.id}>
//             <div className="grid-item">
//               <Card className="card">
//                 <CardContent style={{ padding: 0 }}>
//                   <div>
//                     <img src={album.image} alt={album.title} />
//                   </div>
//                 </CardContent>
//               </Card>
//               <div>
//                 <div className='album-name'>
//                   {album.follows} Follows
//                 </div>
//               </div>
//             </div>
//             <div className='album-title'>
//               {album.title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import "./Albumlist.css";
// import axios from "axios";
// import Button from '@mui/material/Button';
// import "./grid1.styles.css";

// export default function Albumlist() {
//   const [albumlist, setAlbumlist] = useState([]);
//   const [showAll, setShowAll] = useState(true);
//   const [newAlbumList, setNewAlbumList] = useState([]);
//   const [showNewAll, setShowNewAll] = useState(true);

//   const ApiCallForAlbums = async () => {
//     try {
//       const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
//       setAlbumlist(response.data);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const ApiCallForNewAlbums = async () => {
//     try {
//       const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
//       setNewAlbumList(response.data);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   useEffect(() => {
//     ApiCallForAlbums();
//     ApiCallForNewAlbums();
//   }, []);

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   const toggleShowNewAll = () => {
//     setShowNewAll(!showNewAll);
//   };

//   const texttoggler = () => {
//     return showAll ? "Collapse" : "Show All";
//   }

//   const newTexttoggler = () => {
//     return showNewAll ? "Collapse" : "Show All";
//   }

//   return (
//     <div style={{ margin: "1rem" }}>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div className='album-heading'> Top Albums </div>
//         <div style={{ marginRight: "2rem", color: "white" }}>
//           <Button onClick={toggleShowAll} style={{ color: "#34C94B" }}>{texttoggler()}</Button>
//         </div>
//       </div>
//       <div className="grid-container" style={{ marginBottom: "2rem" }}>
//         {(albumlist).map((album) => (
//           <div className="top-album-card" key={album.id}>
//             <div className="grid-item">
//               <div className="card-body">
//                 <img src={album.image} alt={album.title} className='img-sizing' />
//               </div>
//               <div className='album-name'>{album.follows} Follows</div>
//             </div>
//             <div className='album-title'>{album.title}</div>
//           </div>
//         ))}
//       </div>
//       <hr color='#34C94B' />
//       <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
//         <div className='album-heading'> New Albums </div>
//         <div style={{ marginRight: "2rem", color: "white" }}>
//           <Button onClick={toggleShowNewAll} style={{ color: "#34C94B" }}>{newTexttoggler()}</Button>
//         </div>
//       </div>
//       <div className="grid-container">
//         {(newAlbumList).map((album) => (
//           <div className="new-album-card" key={album.id}>
//             <div className="grid-item">
//               <div className="card-body">
//                 <img src={album.image} alt={album.title} className='img-sizing' />
//               </div>
//               <div className='album-name'>{album.follows} Follows</div>
//             </div>
//             <div className='album-title'>{album.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import "./Albumlist.css";
import axios from "axios";
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import "./grid1.styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const SwiperComponent = ({ albumlist }) => {
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
      {albumlist !== undefined && albumlist.length > 0 ? (
        albumlist.map((album, index) => (
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

export default function Albumlist() {
  const [albumlist, setAlbumlist] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [newAlbumList, setNewAlbumList] = useState([]);
  const [showNewAll, setShowNewAll] = useState(false);

  const ApiCallForAlbums = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setAlbumlist(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const ApiCallForNewAlbums = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
      setNewAlbumList(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    ApiCallForAlbums();
    ApiCallForNewAlbums();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const toggleShowNewAll = () => {
    setShowNewAll(!showNewAll);
  };

  const texttoggler = () => {
    return showAll ? "Collapse" : "Show All";
  }

  const newTexttoggler = () => {
    return showNewAll ? "Collapse" : "Show All";
  }

  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className='album-heading'> Top Albums </div>
        <div style={{ marginRight: "2rem", color: "white" }}>
          <Button onClick={toggleShowAll} style={{ color: "#34C94B" }}>{texttoggler()}</Button>
        </div>
      </div>
      {/* Render the SwiperComponent when showAll is false (collapsed state) */}
      {!showAll && (
        <div className="swiper-container">
          <SwiperComponent
            albumlist={albumlist}
            showAll={false}
          />
        </div>
      )}
      {/* Render the grid layout when showAll is true (expanded state) */}
      {albumlist.length === 0 ? (
        <CircularProgress />
      ) : (showAll && (
        <div className="grid-container" style={{ marginBottom: "2rem" }}>
          {albumlist.map((album) => (
            <div className="top-album-card" key={album.id}>
              <div className="grid-item">
                <div className="card-body">
                  <img src={album.image} alt={album.title} className='img-sizing' />
                </div>
                <div className='album-name'>{album.follows} Follows</div>
              </div>
              <div className='album-title'>{album.title}</div>
            </div>
          ))}
        </div>
      ))}

      <hr color='#34C94B' />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
        <div className='album-heading'> New Albums </div>
        <div style={{ marginRight: "2rem", color: "white" }}>
          <Button onClick={toggleShowNewAll} style={{ color: "#34C94B" }}>{newTexttoggler()}</Button>
        </div>
      </div>
      {/* Render the SwiperComponent when showNewAll is false (collapsed state) */}
      {!showNewAll && (
        <div className="swiper-container2">
          <SwiperComponent
            albumlist={newAlbumList}
          />
        </div>
      )}
      {/* Render the grid layout when showNewAll is true (expanded state) */}
      {newAlbumList.length === 0 ? (
        <CircularProgress />
      ) : (
        showNewAll && (
        <div className="grid-container">
          {newAlbumList.map((album) => (
            <div className="new-album-card" key={album.id}>
              <div className="grid-item">
                <div className="card-body">
                  <img src={album.image} alt={album.title} className='img-sizing' />
                </div>
                <div className='album-name'>{album.follows} Follows</div>
              </div>
              <div className='album-title'>{album.title}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}