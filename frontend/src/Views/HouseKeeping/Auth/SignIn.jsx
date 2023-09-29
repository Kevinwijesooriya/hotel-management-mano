import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // call API to submit login
  };

  return (
    <Grid
      container
      sx={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Welcome to Housekeeping
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid
          container
          rowGap={2}
          spacing={2}
          mt={1}
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
