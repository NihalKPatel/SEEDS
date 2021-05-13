import mongoose from "mongoose"
import EvidenceSchema from "./Evidence.js"

const ClaimSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  forPractice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Practice",
    required: true,
  },
  evidence: {
    type: [EvidenceSchema.schema],
    ref: "Evidence",
    required: false,
  },
  submitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  submittedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

const Claim = mongoose.model("Claim", ClaimSchema)
export { Claim as default }
