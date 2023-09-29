import { Router } from "express";
import roomController from "../controllers/room.js";

const roomRoute = Router();

roomRoute.get("/api/room/", roomController.getAllRooms);
roomRoute.get("/api/room/:id", roomController.getRoomById);
roomRoute.post("/api/room/:id", roomController.createRoom);
roomRoute.put("/api/room/update/:id", roomController.updateRoom);
roomRoute.delete("/api/room/delete/:id", roomController.removeRoom);

export default roomRoute;
