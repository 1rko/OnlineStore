const Router = require('express')
const router = new Router
const deviceController = require('../controllers/deviceController')

//на каждый тип запроса срабатывает своя функция-контроллер из папки controllers
router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id',deviceController.getOne)

module.exports = router