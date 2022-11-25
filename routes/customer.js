const express = require('express')
const routes = express.Router()
const { AddCustomer } = require('../controller/customer')



routes.post('/ecomm/api/v1/customer/login', AddCustomer)

module.exports = {Customer : routes}