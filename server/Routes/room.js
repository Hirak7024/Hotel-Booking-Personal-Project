import express from "express";
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms} from "../Controllers/room.js";

const router = express.Router();

//CREATE
router.post("/", createRoom);

//UPDATE
router.put("/:id", updateRoom);

//DELETE
router.delete("/:id", deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;