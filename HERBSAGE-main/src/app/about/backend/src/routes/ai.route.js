const { convert } = require("../controllers/ai.controller")
const auth = require("../middlewares/auth")
const router = require("express").Router()

router.post("/convert", auth, convert)

module.exports = router