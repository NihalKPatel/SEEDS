import express from "express"

// Load Practice model
import Practice from "../../models/Practice.js"

const router = express.Router()

// @route GET api/practices/test
// @description tests books route
// @access Public
router.get("/test", (req, res) => res.send("practice route testing!"))

// @route GET api/books
// @description Get all practices
// @access Public
router.get("/search-results", (req, res) => {
  Practice.find()
    .then((practices) => res.json(practices))
    // eslint-disable-next-line no-unused-vars
    .catch((err) =>
      res.status(404).json({ nobooksfound: "No Practices Found" })
    )
})

// @route GET api/practices/:id
// @description Get single book by id
// @access Public
router.get("/:id", (req, res) => {
  Practice.findById(req.params.id)
    .then((practice) => res.json(practice))
    // eslint-disable-next-line no-unused-vars
    .catch((err) =>
      res.status(404).json({ noPracticeFound: "No Practice found" })
    )
})

// @route GET api/practices
// @description add/save practice
// @access Public
router.post("/", (req, res) => {
  Practice.create(req.body)
    // eslint-disable-next-line no-unused-vars
    .then((practice) => res.json({ msg: "Practice added successfully" }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => res.status(400).json({ error: "Unable to add this book" }))
})

// @route GET api/practices/:id
// @description Update practice
// @access Public
router.put("/:id", (req, res) => {
  Practice.findByIdAndUpdate(req.params.id, req.body)
    // eslint-disable-next-line no-unused-vars
    .then((practice) => res.json({ msg: "Updated successfully" }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    )
})

// @route GET api/practices/:id
// @description Delete practice by id
// @access Public
router.delete("/:id", (req, res) => {
  Practice.findByIdAndRemove(req.params.id, req.body)
    // eslint-disable-next-line no-unused-vars
    .then((practice) =>
      res.json({ mgs: "Practice entry deleted successfully" })
    )
    // eslint-disable-next-line no-unused-vars
    .catch((err) => res.status(404).json({ error: "No such practice" }))
})

export { router as default }
