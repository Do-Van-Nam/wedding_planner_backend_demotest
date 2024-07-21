const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors')

const dbaccs = require('./config/db/dbaccs')

//connect DB
dbaccs.connect()



const app = express()
const port = process.env.PORT 

app.use(bodyParser.json())
app.use(cors())


const route = require('./routes')
route(app)


app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})