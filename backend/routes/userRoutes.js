import { Router } from "express";
import {
  createUser,
  loginUser,
  updateUser,
  fetchUsers,
  showUser,
  deleteUser,
} from "../controller/UserController.js";
const router = Router();

// * Fetch all the users
router.get("/", fetchUsers);

// * Fetch only one uesr  user
router.get("/:id", showUser);

// * Create new user
router.post("/", createUser);

// * Login route
router.post("/login", loginUser);

// * Update the specific user
router.put("/:id", updateUser);

// * Delete the specific user
router.delete("/:id", deleteUser);


export default router;
