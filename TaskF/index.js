const express = require('express')
const App = express()
const Port = 3060
const setupDb = require('./configure/database')
const Router = require('./configure/Route')


setupDb()
App.use(express.json())
App.use('/',Router)
App.listen(Port,()=>{
    console.log('Connected to the Port' + Port)
})