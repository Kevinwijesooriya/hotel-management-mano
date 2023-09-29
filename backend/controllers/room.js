import Room from "../models/room.js";

const roomController = {
  createRoom: async (req, res) => {
    try {
      const { number, floor, status, availability, type } = req.body;

      const ExistingName = await Room.findOne({ number: number, floor: floor });
      if (ExistingName)
        return res.status(400).json({
          message: "Room already exists in the database.",
        });

      const newRoom = new Room({
        number,
        floor,
        status,
        availability,
        type,
      });
      await newRoom.save();
      res.json({
        message: "New room added successfully.",
        data: newRoom,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.find();
      res.json({
        message: "All rooms fetched successfully.",
        data: rooms,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getRoomById: async (req, res) => {
    const id = req.params.id;
    try {
      const room = await Room.findOne({ _id: id });
      res.json({
        message: "Room details fetched successfully.",
        data: room,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateRoom: async (req, res) => {
    try {
      const id = req.params.id;
      const { number, floor, status, availability, type } = req.body;

      await Room.findOneAndUpdate(
        { _id: id },
        { number, floor, status, availability, type }
      );
      res.json({
        message: "Room updated successfully.",
        data: { number, floor, status, availability, type },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  removeRoom: async (req, res) => {
    try {
      const RoomId = req.params.id;

      const room = await Room.findOne({ _id: RoomId });
      if (!room) {
        return res.status(400).json({
          message: "Room not found in the database.",
        });
      }
      await Room.findByIdAndDelete({ _id: RoomId });
      if (res) {
        res.json({ message: "Room was successfully removed ." });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
export default roomController;
