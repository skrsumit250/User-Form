const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  doctor:{
    type:String,
    require:true
  },
  patient:{
    type:String,
    require:true
  },
  age:{
    type:String,
    require:true
  },
  date:{
    type:String,
    require:true
  },
  audio:{
    type:Buffer,
    required:true
  }

});

const user=mongoose.model('user',userSchema);

module.exports=user;
