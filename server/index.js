require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')

const app = express()
app.use(cors())                 //чтоб можно было слать запросы
app.use(express.json())         //чтоб приложение могло парсить json
app.use('/api', router)         //привязка корневого роутера

app.get('/', (req, res) => {
    res.status(200).json({message:'WORKING!!!'})
})

const start = async () => {
    try {
        await sequelize.authenticate()      //подключение к БД
        await sequelize.sync()              //сверяет с БД схемой
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()

