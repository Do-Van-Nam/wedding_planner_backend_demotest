const express = require('express')
const router = express.Router()
const {getPlanByAccId} = require('../app/controllers/PlanController')

router.get('/:accId',getPlanByAccId)


module.exports = router