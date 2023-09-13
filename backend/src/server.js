import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import investmentRoutes from "./routes/investmentRoutes.js"
import { notFound, errorHandler } from "./utils/error.js"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/invest", investmentRoutes)

app.use(notFound)
app.use(errorHandler)

app.use("/", (req, res) => {
  res.send("Server is running")
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running  on port http://localhost:${PORT}`)
)
