import React, { useState, useEffect } from 'react';
import "./Albumlist.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import axios from "axios";
import "./grid1.styles.css";

export default function Albumlist() {
  const [albumlist, setAlbumlist] = useState([]);
  const [partialList, setPartialList] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [newAlbumList, setNewAlbumList] = useState([]);
  const [newPartialList, setNewPartialList] = useState([]);
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

  useEffect(() => {
    const collapseList = () => {
      const list = albumlist.slice(0, 6);
      setPartialList(list);
    };

    if (!showAll) {
      collapseList();
    } else {
      setPartialList(albumlist);
    }
  }, [showAll, albumlist]);

  useEffect(() => {
    const collapseNewList = () => {
      const list = newAlbumList.slice(0, 6);
      setNewPartialList(list);
    };

    if (!showNewAll) {
      collapseNewList();
    } else {
      setNewPartialList(newAlbumList);
    }
  }, [showNewAll, newAlbumList]);

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
          <Button onClick={toggleShowAll} style={{ color: "white" }}>{texttoggler()}</Button>
        </div>
      </div>
      <div className="grid-container">
        {(showAll ? albumlist : partialList).map((album) => (
          <div className="top-album-card" key={album.id}>
            <div className="grid-item">
              <Card className="card">
                <CardContent style={{ padding: 0 }}>
                  <div>
                    <img src={album.image} alt={album.title} />
                  </div>
                </CardContent>
              </Card>
              <div>
                <div className='album-name'>
                  {album.follows} Follows
                </div>
              </div>
            </div>
            <div className='album-title'>
              {album.title}
            </div>
          </div>
        ))}
      </div>
      <hr color='#34C94B' />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className='album-heading'> New Albums </div>
        <div style={{ marginRight: "2rem", color: "white" }}>
          <Button onClick={toggleShowNewAll} style={{ color: "white" }}>{newTexttoggler()}</Button>
        </div>
      </div>
      <div className="grid-container">
        {(showNewAll ? newAlbumList : newPartialList).map((album) => (
          <div className="new-album-card" key={album.id}>
            <div className="grid-item">
              <Card className="card">
                <CardContent style={{ padding: 0 }}>
                  <div>
                    <img src={album.image} alt={album.title} />
                  </div>
                </CardContent>
              </Card>
              <div>
                <div className='album-name'>
                  {album.follows} Follows
                </div>
              </div>
            </div>
            <div className='album-title'>
              {album.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}