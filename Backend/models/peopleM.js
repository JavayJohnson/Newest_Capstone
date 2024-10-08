const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const peopleSchema= new Schema({
    firstName: String,
    lastName: String,
    dob: String
})

module.exports=mongoose.model("People", peopleSchema)