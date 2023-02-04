const router = require("express").Router()

const userController = require('../controller/User')
const jobController = require('../controller/Job')
const auth = require("../middlewares/auth");

router.post("/login", userController.login)
router.post("/register", userController.register)
router.get('/joblist', auth.authentication, jobController.getJob)
router.get('/jobDetail/:id', auth.authentication, jobController.getJobDetails)

module.exports = router