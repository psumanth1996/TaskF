const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
     
    },
    contactnumber:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true,
        maxlength:100
    },
    create_date_time:{
        type:Date, default: new Date(),
        
    }
// { 
//         timestamps: true
//     }
})


const User = mongoose.model("User",UserSchema)

module.exports = User