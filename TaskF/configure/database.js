const mongoose = require('mongoose')

const setUpDb = function(){
    mongoose.connect('mongodb://localhost:27017/taskabc')
    .then(()=>{
      console.log('Connected to the database succecfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = setUpDb
