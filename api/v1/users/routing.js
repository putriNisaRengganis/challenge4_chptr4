import express from 'express';
import {getAllUsers, getUserById, createUser, updateUser, deleteUser, createUserWithProfile} from "./controller.js";


const userRouter = express.Router();

//define the routes
userRouter.post("/api/v1/users", createUserWithProfile);
userRouter.get("/api/v1/users", getAllUsers);
userRouter.get("/api/v1/users/:id", getUserById);
userRouter.put("/api/v1/users/:id", updateUser);
userRouter.delete("/api/v1/users/:id", deleteUser);


export default userRouter;