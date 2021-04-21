// eslint-disable-next-line import/extensions
import mongoose from "mongoose"
// eslint-disable-next-line import/extensions
import evidence from "./Evidence.js"

// eslint-disable-next-line no-unused-vars
const PracticeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nameAbbreviated: {
    type: String,
    required: false,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedDate: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  acceptedEvidence: {
    type: [evidence.schema],
    required: false,
  },
  evidenceSubmissions: {
    type: [evidence.schema],
    required: false,
  },
})

const Practice = mongoose.model("Practice", PracticeSchema)
export { Practice as default }
