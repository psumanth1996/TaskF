const express = require('express')
const Router = express.Router()
const taskController = require('../App/Controller/taskController')


Router.post('/create',taskController.Create)
Router.get('/list',taskController.List)
Router.put('/edit/:id',taskController.Edit)
Router.delete('/delete/:id',taskController.Delete)

module.exports = Router