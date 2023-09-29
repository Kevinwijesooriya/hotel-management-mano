import React, { useEffect, useState } from "react";
import { RoomData } from "../../Data/RoomData";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FetchRooms } from "../../Service/RoomAPI";
import AddButton from "./Components/AddButton";
import RoomDelete from "./RoomDelete";
import UpdateButton from "./Components/UpdateButton";

const RoomList = () => {
  const [roomData, setRoomData] = useState(RoomData);
  const [reFetch, setReFetch] = useState(false);

  const fetchData = async () => {
    try {
      const response = await FetchRooms();
      setRoomData(response.data);
      console.log("~ fetchData ~ response:", response);
    } catch (error) {
      console.log("fetchData ~ error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [reFetch]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Floor </TableCell>
              <TableCell>Number</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Availability</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roomData.map((room) => (
              <TableRow
                key={room._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{room.floor}</TableCell>
                <TableCell>{room.number}</TableCell>
                <TableCell align="right">{room.type}</TableCell>
                <TableCell align="right">{room.status}</TableCell>
                <TableCell align="right">{room.availability}</TableCell>
                <TableCell align="right">
                  <UpdateButton roomId={room._id} />
                  <RoomDelete
                    roomId={room._id}
                    reFetch={reFetch}
                    setReFetch={setReFetch}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddButton />
    </>
  );
};

export default RoomList;
