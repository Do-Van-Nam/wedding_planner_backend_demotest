const mongoose = require('mongoose')

async function connect(){
    try { 
        await mongoose.createConnection('mongodb://localhost:27017/rooms',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to dbrooms")
    } catch (error) {
        console.log("fail to connect dbrooms")
        console.log(error)
    }
}

module.exports  = {connect}