import express from "express"
import cors from "cors"
import path from "path"
// eslint-disable-next-line import/extensions
import connectDB from "./config/db.js"

// routes
import repository from "./routes/api/repository.js"

const app = express()

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }))

// Init Middleware
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))

// use Routes
app.use("/", repository)

const port = process.env.PORT || 8082

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build"))
  })
}

app.listen(port, () => console.log(`Server running on port ${port}`))
