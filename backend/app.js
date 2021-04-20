const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }))
// Init Middleware
app.use(express.json({ extended: false }))
// use Routes

app.get("/", (req, res) => res.send("Hello world!"))

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server running on port ${port}`))
