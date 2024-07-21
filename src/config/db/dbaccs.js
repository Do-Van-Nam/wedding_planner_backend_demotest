const mongoose = require('mongoose')

async function connect(){
    try { 
        await mongoose.connect('mongodb://localhost:27017/accounts',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to dbaccs")
    } catch (error) {
        console.log("fail to connect dbaccs")
        console.log(error)
    }
}

module.exports  = {connect}