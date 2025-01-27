import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser } from "../controllers/userController.js";
const route = Router();

route.post('/users', createUser);
route.get('/users', getAllUsers);
route.get('/users/:id', getUser);
route.delete('/users/:id',deleteUser);

export default route;