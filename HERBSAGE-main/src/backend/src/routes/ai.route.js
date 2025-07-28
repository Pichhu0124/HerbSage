const { chat } = require("../controllers/ai.controller")
const auth = require("../middlewares/auth")
const router = require("express").Router()

router.post("/chat", auth, chat)

module.exports = router