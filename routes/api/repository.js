import express from "express"

// Load models
import Practice from "../../models/Practice.js"
import Claim from "../../models/Claim.js"

const router = express.Router()

// @route GET /repository-practices
// @description Get all practices
// @access Public
router.get("/repository-practices", (req, res) => {
  Practice.find()
    .then((practices) => res.json(practices))
    // eslint-disable-next-line no-unused-vars
    .catch((err) =>
      res.status(404).json({
        emptyRepository: "There are no SE practices in the repository",
      })
    )
})

// @route GET /repository-search/:query
// @description Get with name or nameAbbreviated which matches the query
// @access Public
router.get("/repository-search/:query", (req, res) => {
  Practice.find({
    $or: [{ name: req.params.query }, { nameAbbreviated: req.params.query }],
  })
    .then((practices) => res.json(practices))
    // eslint-disable-next-line no-unused-vars
    .catch((err) =>
      res.status(404).json({
        noSearchResult: "There are no matching results in the repository",
      })
    )
})

// @route GET /practice/create
// @description add/save practice
// @access Public
router.post("/practice/create", (req, res) => {
  Practice.create(req.body)
    // eslint-disable-next-line no-unused-vars
    .then((practice) => res.json({ msg: "Practice added successfully" }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => res.status(400).json({ error: "Unable to add this book" }))
})

// @route GET /practices/:id
// @description Get single practice by id
// @access Public
router.get("/practice/:id", async (req, res) => {
  const practice = await Practice.findById(req.params.id).catch((err) => {
    console.log(err)
    res.status(404).json({ noPracticeFound: "No Practice found" })
  })

  const claims = await Claim.find({
    _id: { $in: practice.claims },
  }).catch((err) => {
    console.log(err)
    res.status(404).json({ noClaimsFound: "No Claims found" })
  })
  res.json({ practice, claims })
})

// @route PUT /practices/:id
// @description Update practice
// @access Public
router.put("/practice/:id", (req, res) => {
  Practice.findByIdAndUpdate(req.params.id, req.body)
    // eslint-disable-next-line no-unused-vars
    .then((practice) => res.json({ msg: "Updated successfully" }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    )
})

// @route DELETE /practice/:id
// @description Delete practice by id
// @access Public
router.delete("/practice/:id", (req, res) => {
  Practice.findByIdAndRemove(req.params.id, req.body)
    // eslint-disable-next-line no-unused-vars
    .then((practice) =>
      res.json({ mgs: "Practice entry deleted successfully" })
    )
    // eslint-disable-next-line no-unused-vars
    .catch((err) => res.status(404).json({ error: "No such practice" }))
})

// @route POST /claim/save
// @description add/save claim
// @access Public
router.post("/claim/save", (req, res) => {
  Claim.create(req.body)
    .then((claim) => res.json({ msg: "Claim added successfully", claim }))
    .catch((err) => {
      res.status(400).json({ error: "Unable to add this claim", err })
    })
})

// @route GET /claim/:id
// @description Get single practice by id
// @access Public
router.get("/claim/:id", (req, res) => {
  Claim.findById(req.params.id)
    .then((claim) => res.json(claim))
    // eslint-disable-next-line no-unused-vars
    .catch((err) =>
      res.status(404).json({ noPracticeFound: "No Practice found", err })
    )
})

export { router as default }
