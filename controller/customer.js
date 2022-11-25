const { Customers } = require('../models')

async function AddCustomer(req, res){
	const data = req.body;
	const name = data.name;
	const PhoneNo = data.PhoneNo;
    const email= data.email;

	try{
		const result = await Customers.create({name,PhoneNo,email})
		console.log('result', result);
		res.send({msg : 'Category has been created'})
	}catch(err){
		console.log('err in creation of categories', err)
		res.status(500).send({msg : 'Internal server error'})
	}
	


}
module.exports ={
    AddCustomer
}