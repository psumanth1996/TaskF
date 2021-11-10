const User = require('../model/user')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 


module.exports.Create = (req,res)=>{
    const body = req.body
   req.body.password = cryptr.encrypt(req.body.password);
    const user = new User(body)
    user.save()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.List = (req,res)=>{
    User.find()
    .then((response)=>{
       
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.Edit = (req,res)=>{
    const body = req.body
    const id = req.params.id
    User.findByIdAndUpdate(id,body)
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.Delete= (req,res)=>{
    const id = req.params.id
    User.findByIdAndDelete(id)
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}
