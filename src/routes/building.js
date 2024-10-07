const express = require('express')
const router = express.Router()
const { getBuildingsByOwnerId,getBuildingById, updateBuilding, deleteBuilding, createBuilding } = require('../app/controllers/BuildingController')
const managerAuthMiddleWare = require('../app/middlewares/managerAuthMiddleWare')

// router.get('/:id', getBuildingById)
router.get('/:ownerId',managerAuthMiddleWare, getBuildingsByOwnerId)
router.put('/:id',managerAuthMiddleWare, updateBuilding)
router.delete('/:id',managerAuthMiddleWare, deleteBuilding)
router.post('/', createBuilding)

module.exports = router