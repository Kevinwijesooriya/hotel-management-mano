import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { RemoveRoom } from '../../Service/RoomAPI';
import { toast } from 'react-toastify';

export default function RoomDelete(props) {
    const { roomId,reFetch, setReFetch } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
        const response = await RemoveRoom(roomId)
        toast.success(response.message)
        
    } catch (error) {
      toast.error("oops! something went wrong.");
    }
    setOpen(false);
    setReFetch(!reFetch);
  };

  return (
    <>
      <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon color="error" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Room?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will delete the room details from the database.This action
            cannot be reversed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
