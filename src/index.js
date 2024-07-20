const express = require('express')

const app = express()
const port = process.env.PORT || 5713

// const route = require('./routes')
// route(app)

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})