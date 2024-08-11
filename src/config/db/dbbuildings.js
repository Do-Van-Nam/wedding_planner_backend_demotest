const mongoose = require('mongoose')

async function connect(){
    try { 
        await mongoose.createConnection('mongodb://localhost:27017/buildings',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to dbbuildings")
    } catch (error) {
        console.log("fail to connect dbbuildings")
        console.log(error)
    }
}

module.exports  = {connect}