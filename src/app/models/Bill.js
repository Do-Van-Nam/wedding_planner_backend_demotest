const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const Bill = new Schema({
    name : {type: String},
    roomId : { type : String, },
    room : {type: Number},
    cost : {type: Number},
    isPaid : {type: Boolean, default: false},
    dateOfInvoice: {type: Date},
    dateOfPayment: {type: Date},
})

module.exports = mongoose.model('Bill' , Bill)