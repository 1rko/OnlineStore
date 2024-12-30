const uuid = require('uuid')
const path = require('path')         //модуль в node.js
const {Device} = require('../models/models')
const ApiError = require('../errors/ApiErrors')

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'       //генерируется уникальное имя файла для картинки
            img.mv(path.resolve(__dirname, '..', 'static', fileName))    //path.resolve - функция адаптирует путь в ОС, __dirname - путь до текущей папки с контроллерами

            const device = await Device.create({name, price, brandId, typeId, img: fileName})

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()