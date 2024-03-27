import React, { useState, useEffect } from 'react';
import "./Albumlist.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from "axios";

export default function Albumlist() {
  const [albumlist, setAlbumlist] = useState([]);

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

  return (
    <Grid container spacing={2}>
      {albumlist.map((album) => (
        <Grid item xs={12} sm={6} md={3} lg={2} key={album.id}
            style={{
                marginLeft: "10px",
            }}
        >
            <Card className='card-body'>
                <CardContent style={{ padding: 0 }}>
                    <div>
                        <img src={album.image} alt={album.title} className='img-sizing' />
                    </div>
                </CardContent>
            </Card>
            <div>
                <Typography variant="h5" component="div" color="white">
                {album.follows}
                </Typography>
                <Typography variant="body2" color="white">
                {album.title}
                </Typography>
            </div>
        </Grid>
      ))}
    </Grid>
  );
}