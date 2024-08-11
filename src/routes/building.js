const express = require('express')
const router = express.Router()
const { getBuildingsByOwnerId,getBuildingById, updateBuilding, deleteBuilding, createBuilding } = require('../app/controllers/BuildingController')
const managerAuthMiddleware = require('../app/middlewares/managerAuthMiddleware')

// router.get('/:id', getBuildingById)
router.get('/:ownerId',managerAuthMiddleware, getBuildingsByOwnerId)
router.put('/:id', updateBuilding)
router.delete('/:id', deleteBuilding)
router.post('/', createBuilding)

module.exports = router