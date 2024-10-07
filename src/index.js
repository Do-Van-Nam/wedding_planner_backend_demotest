const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser');


const dbaccs = require('./config/db/dbaccs')
const dbbuildings = require('./config/db/dbbuildings')
const dbrooms = require('./config/db/dbrooms')
const dbplan = require('./config/db/dbplan')

//connect DB
dbaccs.connect()
dbbuildings.connect()
dbrooms.connect()
dbplan.connect()

const app = express()
const port = process.env.PORT

app.use(cookieParser());
app.use(bodyParser.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))
// {
//     origin: 'http://localhost:3000',
//     credentials: true
// }

const route = require('./routes')
route(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})