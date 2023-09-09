import express from "express"
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

router.post("/register", registerUser)

router.post("/login", authUser)

router.get("/getUser", protect, getUserProfile)

export default router
