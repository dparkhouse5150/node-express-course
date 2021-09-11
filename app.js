const express = require('express')
const app  = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

/**
 * connect to the database. using mongodb
 */
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`serfer is listening on port ${port}`))
    } catch (err) {
        console.log(err)
    }
}

start()

const searchUserById = async () => {
    try {
        const user = User.findOne({ _id: req.body.id })

        if (!user) {

        }

    } catch (err) {
        console.log(err)
    }
}

const searchByVideoName = async () => {}



module.exports = {
    start,
    searchUserById,
    searchByVideoName,
}