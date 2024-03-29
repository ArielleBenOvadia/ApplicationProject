const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },  
    admin:{
     type: Boolean,
     default: false,
    },
   orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order"
        }
    ]
})

const User = mongoose.model('User',userSchema)
module.exports = User