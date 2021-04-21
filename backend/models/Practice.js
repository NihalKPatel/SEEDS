import evidence from "./Evidence"

const mongoose = require("mongoose")

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
    required: true,
  },
  updatedDat: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  acceptedEvidence: {
    type: [evidence],
    required: false,
  },
  evidenceSubmissions: {
    type: [evidence],
    required: false,
  },
})
