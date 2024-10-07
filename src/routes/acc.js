const express = require('express')
const router  = express.Router()
const {getAccs,createAcc,updateAcc,deleteAcc,checkAuth} = require('../app/controllers/AccountController')
const managerAuthMiddleware = require('../app/middlewares/managerAuthMiddleware')
const authMiddleware = require('../app/middlewares/authMiddleWare')
 
router.get('/check-auth',authMiddleware,checkAuth)
router.get('/',getAccs)
router.post('/',createAcc)
router.put('/:id',managerAuthMiddleware,updateAcc)
router.delete('/:id',managerAuthMiddleware,deleteAcc)

module.exports = router