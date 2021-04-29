import mongoose from "mongoose"

const EvidenceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  submitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  attributes: {
    type: Map,
    of: String,
  },
})

const Evidence = mongoose.model("Evidence", EvidenceSchema)
export { Evidence as default }
