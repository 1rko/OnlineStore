const apiErrors = require('../errors/ApiErrors')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id) {
            return next(apiErrors.badRequest('Не задан id' ))
        }
        res.json(id)    }
}

module.exports = new UserController()