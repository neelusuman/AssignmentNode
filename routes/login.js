const express = require('express')
const routes = express.Router()

const {signUp, signIn}= require('../controller/login')
const {checkDuplicateUsernameAndPhoneNo} = require('../middleware')


routes.get('/ecomm/api/v1/customer/login', signIn)
routes.post('/ecomm/api/v1/customer/signUp'[checkDuplicateUsernameAndPhoneNo], signUp)

module.exports = {login : routes}

