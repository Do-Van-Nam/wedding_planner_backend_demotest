const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    title : {type: String},
    description : { type : String, },
    posterId : {type: String},

    dateOfPost: {type: Date},

})

module.exports = mongoose.model('Post' , Post)