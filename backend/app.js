import express from "express"
import cors from "cors"
// eslint-disable-next-line import/extensions
import connectDB from "./config/db.js"

// routes
// eslint-disable-next-line import/extensions
import practices from "./routes/api/practices.js"

const app = express()

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }))

// Init Middleware
app.use(express.json({ extended: false }))

// use Routes
app.use("/api/practices", practices)

app.get("/", (req, res) => res.send("Hello world!"))

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server running on port ${port}`))
