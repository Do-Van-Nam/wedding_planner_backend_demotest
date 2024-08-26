const LoginRouter = require('./login')
const SignupRouter = require('./signup')
const AccRouter = require('./acc')
const BuildingRouter = require('./building')
const RoomRouter = require('./room')
const LogoutRouter = require('./logout')

function route(app){
    app.use('/signup',SignupRouter)
    app.use('/login',LoginRouter)
    app.use('/acc',AccRouter)
    app.use('/building',BuildingRouter)
    app.use('/room',RoomRouter)
    app.use('/logout',LogoutRouter)
}

module.exports = route