const express = require('express')
const router  = express.Router()
const {getAccs,updateAcc,deleteAcc} = require('../app/controllers/AccountController')
const managerAuthMiddleware = require('../app/middlewares/managerAuthMiddleware')

router.get('/',managerAuthMiddleware,getAccs)
router.put('/:id',managerAuthMiddleware,updateAcc)
router.delete('/:id',managerAuthMiddleware,deleteAcc)

module.exports = router