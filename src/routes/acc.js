const express = require('express')
const router  = express.Router()
const {getAccs} = require('../app/controllers/AccountController')

router.get('/',getAccs)

module.exports = router