import express from "express"
import {
  addInvestment,
  getAllInvestments,
  getAllParameters,
} from "../controllers/investmentController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

router.get("/getallparams", getAllParameters)

router.get("/getallinvestments", protect, getAllInvestments)

router.post("/addinvestment", protect, addInvestment)

export default router
