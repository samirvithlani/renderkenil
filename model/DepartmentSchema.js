const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    location:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model('Department',departmentSchema)