const Room = require('../models/Room')

const getRoomsByBuildingId = async (req, res) => {
    const { buildingId } = req.params
    try {
        const rooms = await Room.find({ buildingId })
        res.json({ rooms: rooms })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Server error' })
    }
}
const getRoomById = async (req, res) => {
    const id = req.params.id
    try {
        const room = await Room.findById(id)
        res.json({ room: room })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Server error' })
    }
}
const createRoom = async (req, res) => {
    const { roomName,tenantId,buildingId,floor,isRented,price,startday,noPrepaidMonths } = req.body
    try {
        let room = await Room.findOne({ roomName, buildingId })
        if (room) {
            return res.status(400).json({ message: 'Room already exists!' })
        }

        room = new Room({
            roomName,tenantId,buildingId,floor,isRented,price,startday,noPrepaidMonths
        })
        await room.save()
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Server error' })
    }
}
const updateRoom = async (req, res) => {
    const id = req.params.id
    let { roomName,tenantId,buildingId,floor,isRented,price,startday,noPrepaidMonths } = req.body
    try {
        const updatedRoom = {
            roomName,tenantId,buildingId,floor,isRented,price,startday,noPrepaidMonths
        }

        const updatedRoom1 = await Room.findByIdAndUpdate(id, updatedRoom, { new: true })
        if (!updatedRoom1) {
            return res.status(404).json({ message: 'Room not found' })
        }
        return res.status(200).json(updatedRoom1)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Server error' })
    }
}
const deleteRoom = async (req, res) => {
    const id = req.params.id
    try {
        const deletedRoom = await Room.findByIdAndDelete(id)
        if (!deletedRoom) {
            return res.status(404).json({ message: 'Room not found' })
        }
        return res.status(200).json({ message: 'Room deleted successfully!' })

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

module.exports = { getRoomsByBuildingId, getRoomById, createRoom, updateRoom, deleteRoom }