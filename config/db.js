import mongoose from "mongoose"
import config from "config"

const db = process.env.MONGODB_URI || config.get("mongoURI")

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log("MongoDB is Connected...")
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export { connectDB as default }
