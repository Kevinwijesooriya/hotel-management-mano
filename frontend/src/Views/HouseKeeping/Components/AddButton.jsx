import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function AddButton() {
  return (
    <div style={{ position: "fixed", bottom: "16px", right: "16px" }}>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        component={Link}
        to="/house-keeping/room/create"
      >
        <AddIcon />
        Add Room
      </Fab>
    </div>
  );
}
