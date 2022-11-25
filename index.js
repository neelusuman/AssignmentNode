const {serverPort} = require('./config/server.config')
const express = require('express')
const {sequelize,customer } = require('./models')
const {Customer} = require('./routes')
const app = express()

app.use(express.json())
app.use(Customer)


app.listen(serverPort, async ()=> {
	console.log('server is running on this port', serverPort)
	await init()
})

async function init(){
	try{
		await sequelize.sync({force: true})

	}
	catch(err){
		console.log(err)
	}

}