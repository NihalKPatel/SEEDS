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

<<<<<<< HEAD
const Submitter = mongoose.model("Submitter", SubmitterSchema)
module.exports = Submitter
=======
mongoose.model("Submitter", SubmitterSchema)
>>>>>>> parent of 63cb50f... done
