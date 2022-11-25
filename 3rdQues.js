
// I have just written the function for this question, For the the functioning of this code we need create routes, databases and make connections.

async function InsertData(req, res){
    const email= req.body.email;   // email input from user side comes with this method
    const name= req.body.name;
    try{
        const result= await User.findOne({  // Here User will be model/table name
            where : {
                email : email
            }
        })
        if(result){      // if email already exist in dB
            result.name=req.body.name;
            result.save();
            res.send({msg : 'name got update', result})
        }
        else{       // if email is unique we will just insert it
            const user = await User.create({name,email});
            console.log('user',user);
            res.send({msg : 'New user has been created'})
        }
    }catch(err){
        res.status(500).send({msg : 'Internal Server error'});
    }
}