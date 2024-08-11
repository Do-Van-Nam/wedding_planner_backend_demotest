const LoginRouter = require('./login')
const SignupRouter = require('./signup')
const AccRouter = require('./acc')
const BuildingRouter = require('./building')
const RoomRouter = require('./room')

function route(app){
    app.use('/signup',SignupRouter)
    app.use('/login',LoginRouter)
    app.use('/accs',AccRouter)
    app.use('/building',BuildingRouter)
    app.use('/room',RoomRouter)
}

module.exports = route