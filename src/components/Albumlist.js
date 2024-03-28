import React, { useState, useEffect } from 'react';
import "./Albumlist.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import "./grid1.styles.css";

export default function Albumlist() {
  const [albumlist, setAlbumlist] = useState([]);
  const [partialList, setPartialList] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const ApiCallForAlbums = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setAlbumlist(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    ApiCallForAlbums();
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

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const texttoggler = () => {
    return showAll ? "Collapse" : "Show All";
  }

  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className='album-heading'>
          Top Albums
        </div>
        <div style={{ marginRight: "2rem", color: "white" }}>
          <Button onClick={toggleShowAll}>{texttoggler()}</Button>
        </div>
      </div>
      <div className="grid-container">
        {(showAll ? albumlist : partialList).map((album) => (
          <div className="grid-item" key={album.id}>
            <Card className="card">
              <CardContent style={{ padding: 0 }}>
                <div>
                  <img src={album.image} alt={album.title} />
                </div>
              </CardContent>
            </Card>
            <div>
              <Typography variant="h5" component="h5">
                <span>follows</span>: {album.follows}
              </Typography>
              <Typography variant="body2" component="p">
                {album.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}