const uuid = require('uuid')
const path = require('path')         //модуль в node.js
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../errors/ApiErrors')

//создается класс с методами, которые cрабатывают на соответ тип rest-запроса
class DeviceController {
    //тип запроса POST - создает новый device
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body   //деструктуризация запрашиваемых данных
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'       //генерируется уникальное имя файла для картинки
            img.mv(path.resolve(__dirname, '..', 'static', fileName))    //path.resolve - функция адаптирует путь в ОС, __dirname - путь до текущей папки с контроллерами
            const device = await Device.create({name, price, brandId, typeId, img: fileName})

            if (info) {
                info = JSON.parse(info)     //если с фронта приходит об'ект через form-data, то нужно его парситьб а потом опять в JSON об'э'екты переводить
                info.forEach(i => {
                        DeviceInfo.create({
                            title: i.title,
                            description: i.description,
                            deviceId: i.deviceId
                        })
                    }
                )
            }
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})     //возвращает в формате {"count": 6,  "rows": [{id:..}, {id:...}}
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()