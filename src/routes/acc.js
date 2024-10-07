const express = require('express')
const router  = express.Router()
const {getAccs,createAcc,updateAcc,deleteAcc,checkAuth} = require('../app/controllers/AccountController')
const managerAuthMiddleWare = require('../app/middlewares/managerAuthMiddleware')
const authMiddleWare = require('../app/middlewares/authMiddleWare')
 
router.get('/check-auth',authMiddleWare, checkAuth)
router.get('/',authMiddleWare,getAccs)
router.post('/',createAcc)
router.put('/:id',managerAuthMiddleWare,updateAcc)
router.delete('/:id',managerAuthMiddleWare,deleteAcc)

module.exports = router