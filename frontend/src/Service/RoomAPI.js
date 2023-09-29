import axios from "axios";
const baseUrl = "http://localhost:5000/api/";

export const CreateRoom = async (roomData) => {
  try {
    const response = await axios.post(`${baseUrl}room/create`, roomData);
    console.log("Room created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};

export const UpdateRoom = async (roomData, RoomId) => {
  try {
    const response = await axios.put(
      `${baseUrl}room/update/${RoomId}`,
      roomData
    );
    console.log("Room updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating room:", error);
    throw error;
  }
};

export const FetchRooms = async () => {
  try {
    const response = await axios.get(`${baseUrl}room/`);
    console.log("All Rooms Fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};

export const FetchOneRoom = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}room/${id}`);
    console.log("Room Fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching room:", error);
    throw error;
  }
};

export const RemoveRoom = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}room/delete/${id}`);
    console.log("Room Removed:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error removing room:", error);
    throw error;
  }
};
