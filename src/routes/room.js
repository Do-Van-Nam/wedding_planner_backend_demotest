const express = require('express')
const router = express.Router()
const { getRoomsByBuildingId,getRoomById, updateRoom, deleteRoom, createRoom } = require('../app/controllers/RoomController')
const managerAuthMiddleware = require('../app/middlewares/managerAuthMiddleware')

// router.get('/:id', getRoomById)
router.get('/:buildingId',managerAuthMiddleware, getRoomsByBuildingId)
router.put('/:id', updateRoom)
router.delete('/:id', deleteRoom)
router.post('/', createRoom)

module.exports = router