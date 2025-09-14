import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "./user.controller";

// User Projects
const userRouter = express.Router();

// Get Users
userRouter.get("/", getUsers);

// Get User by ID
userRouter.get("/:id", getUserById);

// Create User
userRouter.post("/", createUser);

// Update User
userRouter.put("/:id", updateUser);

// Delete User
userRouter.delete("/:id", deleteUser);

export default userRouter;
