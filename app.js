const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/srvdb'
const app = express()

mongoose.connect(url, {
    useNewUrlParser: true
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const srvRouter = require('./Routers/routing')
app.use('/data', srvRouter)

app.listen(9000, () => {
    console.log('Server started')
})