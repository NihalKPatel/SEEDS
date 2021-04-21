import evidence from "./Evidence"

const mongoose = require("mongoose")

const SubmitterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  submissions: {
    type: [evidence.schema],
    required: true,
  },
  submissionCount: {
    type: Number,
    required: true,
  },
})

mongoose.model("Submitter", SubmitterSchema)
