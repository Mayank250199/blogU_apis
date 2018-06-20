var mongoose = require('mongoose');

var User_DetailSchema = new mongoose.Schema({
  user_id: {
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

module.exports = mongoose.model('User_Detail', User_DetailSchema);
