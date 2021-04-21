const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  joinedDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  submitterExt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Submitter",
    required: false,
  },
})

mongoose.model("Submitter", userSchema)

// Post.findOne({_id: 123})
//     .populate('postedBy')
//     .exec(function(err, post) {
//       // do stuff with post
//     });
