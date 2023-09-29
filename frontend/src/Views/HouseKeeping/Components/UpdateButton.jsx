import React from 'react'
import {  IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const UpdateButton = ({ roomId }) => {
  return (
    <>
      <IconButton
        color="primary"
        aria-label="update"
        component={Link}
        to={`/house-keeping/room/update/${roomId}`}
      >
        <EditIcon />
      </IconButton>
    </>
  );
};

export default UpdateButton