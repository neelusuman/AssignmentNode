const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {Login} = require('../models')

async function signUp(req,res){
	const username = req.body.username;
	const PhoneNo = req.body.PhoneNo;
	const password = bcrypt.hashSync(req.body.password, 8);

	try{
		const user= await Login.create({username,PhoneNo,password})
		console.log('user', user)
	
		res.send({msg :'User has been created successfully'})
	}catch(err){
		res.status(500).send({msg : 'Internal Server error'})
	}


	
}

async function signIn(req,res){
	const PhoneNo = req.body.PhoneNo;
	const password = req.body.password;

	try{
		const user = await Login.findOne({
			where : {
				PhoneNo : PhoneNo
			}
		})
		if(user){
			const validPassword = bcrypt.compareSync(password,user.password)
			if(!validPassword){
				res.status(400).send({msg : 'Username/password is not correct'})	
			}

			res.send( 'login successful', user)
		
		}else{
			res.status(400).send({msg : 'Username/password is not correct'})	
		}
	}catch(err){
		res.status(500).send({msg : 'Internal Server Error', err})
	}
}

module.exports = {signUp, signIn}