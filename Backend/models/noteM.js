const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const noteSchema= new Schema({
    comment: String,
    
})

module.exports=mongoose.model("Note", noteSchema)
