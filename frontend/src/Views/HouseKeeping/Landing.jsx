import React from 'react'
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from '@mui/material'

const Landing = () => {
 
  return (
    <Grid
      container
      sx={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h5" align="center" gutterBottom>
          Housekeeping Management
        </Typography>
        <Button fullWidth component={Link} to={"house-keeping/room/"}>
          HK Room Operations
        </Button>
        <Button fullWidth component={Link} to={"house-keeping/room/"}>
          HK Model Distribution
        </Button>
        <Button fullWidth component={Link} to={"house-keeping/room/"}>
          HK Reservation Notes
        </Button>
        <Button fullWidth component={Link} to={"house-keeping/room/"}>
          Closed Room List
        </Button>
        <Button fullWidth component={Link} to={"house-keeping/room/"}>
          Room Calender
        </Button>
        <Button fullWidth component={Link} to={"house-keeping/room/"}>
          Room Change Plan
        </Button>
      </Grid>

      <Grid item xs={12} md={6}>
        <image
          src={
            "https://img.freepik.com/free-vector/isometric-breakfast-hotel-service-concept-with-waitress-brought-dishes-client-room-isolated_1284-38575.jpg?w=900&t=st=1695994995~exp=1695995595~hmac=85c234896cdfa47fd32ead07875ea10a618ea3bb67dd7490840a9e815574a39a"
          }
        ></image>
      </Grid>
    </Grid>
  );
};

export default Landing;
