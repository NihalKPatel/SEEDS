import mongoose from "mongoose"

const EvidenceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  submitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  attributes: {
    type: Map,
    of: String,
  },
  dateSubmitted: {
    type: Date,
    default: Date.now,
  },
})

const Evidence = mongoose.model("Evidence", EvidenceSchema)
export { Evidence as default }
