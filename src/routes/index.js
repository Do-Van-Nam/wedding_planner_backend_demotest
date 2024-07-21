const LoginRouter = require('./login')
const SignupRouter = require('./signup')
const AccRouter = require('./acc')

function route(app){
    app.use('/signup',SignupRouter)
    app.use('/login',LoginRouter)
    app.use('/accs',AccRouter)
}

module.exports = route