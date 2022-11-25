const {Login, Sequelize} = require('../models')

async function checkDuplicateUsernameAndPhoneNo(req,res,next){
	if(req.body.username){
		const user = await Login.findOne({
			where : {
				username:req.body.username
			}
		})

		if(user){
			res.status(400).send({msg : 'Username already exist'})
			return;
		}
	} 

	if(req.body.PhoneNo){
		const user = await Login.findOne({
			where : {
				PhoneNo:req.body.PhoneNo
			}
		})

		if(user){
			res.status(400).send({msg : 'PhoneNo already exist'})
			return;
		}
	}

	next()

}
module.exports ={
    checkDuplicateUsernameAndPhoneNo 
}
