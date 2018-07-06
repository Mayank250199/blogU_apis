var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  username:{
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
   mobile_no:{
       type: Number,
       default: ''
   },
   profile_pic:{
     type: String,
     default: ''
   },
   profession:{
     type: String,
     default: ''
   },
  followers: [{
    user_id: {
    type: String,
    default: ''
    }
  }],
  following:[{
    user_id:{
    type: String,
    default: ''
    }
  }],
  notification: [{
    user_id:{
      type: String,
      default: ''
    },
    description:{
      type: String,
      default: ''
    },
    seen:{
      type:Boolean,
      default: false
    }
  }],
  answer:[{
    blog_id:{
      type: String,
      default: ''
    },
    answer_id:{
      type: String,
      default: ''
    }
  }],
  points:{
    type: Number,
    default: ''
  }
});

UserSchema.methods.generateHash = function(Password){
  return bcrypt.hashSync(Password, bcrypt.genSaltSync(8),null);
};

UserSchema.methods.validPassword = function(Password){
  return bcrypt.compareSync(Password,this.Password,null);
};

module.exports = mongoose.model('User', UserSchema);
