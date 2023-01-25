const mongoose= require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({

    name:{
        type:String,
        required:true,
    },
    department:{
        type: Schema.Types.ObjectId,
        ref:'Department'
    }
})

module.exports = mongoose.model('Employee1',employeeSchema)