const express=require('express')
const route= express.Router()
const controller=require('./controller/index')

route.post('/',controller.create)

route.get('/',controller.read)

route.delete('/:id',controller.delete)

module.exports=route