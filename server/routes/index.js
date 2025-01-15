const Router = require('express')
const router = new Router

//Все роутеры импортируются из соотв файлов
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

//соответствующие роутеры вызываются по своим адресам относительно корневого адреса
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

module.exports = router