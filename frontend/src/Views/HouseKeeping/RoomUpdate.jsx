import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FetchOneRoom, UpdateRoom } from "../../Service/RoomAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const RoomUpdate = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    number: "",
    floor: "",
    status: "Cleaned",
    availability: "Vacant",
    type: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // Make API call to get existing room data
    const fetchRoom = async () => {
      const response = await FetchOneRoom(roomId);
      setFormData(response.data);
    };
    fetchRoom();
  }, [roomId]);

  const validate = () => {
    let tempErrors = {};
    if (!formData.number) {
      tempErrors.number = "Room number is required";
    } else if (isNaN(formData.number)) {
      tempErrors.number = "Room number must be a number";
    }

    if (!formData.floor) {
      tempErrors.floor = "Floor is required";
    } else if (isNaN(formData.floor)) {
      tempErrors.floor = "Floor must be a number";
    }

    if (!formData.type) {
      tempErrors.type = "Room type is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setErrors({});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      // Send a POST request to your server to add the room to the database
      const response = await UpdateRoom(formData, roomId);
      toast.success(response.message);

      // Reset the form after successfully adding the room
      setFormData({
        number: "",
        floor: "",
        status: "Cleaned",
        availability: "Vacant",
        type: "",
      });
      navigate("/house-keeping/room/");
    } catch (error) {
      toast.error("oops! something went wrong.");
      console.error("Error adding room:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" align="center">
        Add a New Room
      </Typography>
      <Grid
        container
        rowGap={2}
        spacing={2}
        mt={1}
        component="form"
        onSubmit={handleSubmit}
      >
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Room Number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            error={errors.number}
            helperText={errors.number}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Floor"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            error={errors.floor}
            helperText={errors.floor}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <MenuItem value="Cleaned">Cleaned</MenuItem>
              <MenuItem value="Not cleaned">Not cleaned</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Availability</InputLabel>
            <Select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
            >
              <MenuItem value="Vacant">Vacant</MenuItem>
              <MenuItem value="Occupied">Occupied</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            error={errors.type}
            helperText={errors.type}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RoomUpdate;
