import * as React from "react";
import { IconButton, AppBar, Box, Toolbar, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 9 }}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ margin: 0, padding: 0, boxShadow: 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography fontWeight={700}>HK Room Management</Typography>
          <Button color="inherit" >
            <MenuIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
