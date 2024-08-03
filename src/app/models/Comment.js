const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
    title : {type: String},
    comment : { type : String, },
    tenantId : {type: String},
    isHandled : {type: Boolean, default: false},
    handlementStatus: {type: String},
    dateOfComment: {type: Date},
    dateOfHandlement: {type: Date},
})

module.exports = mongoose.model('Comment' , Comment)