var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  image: [{
    pics:{
      type: String,
      default: ''
    }
  }],
  category: {
    type: String,
    default: ''
  },
  body:{
      type: String,
      default: ''
  },
  author: {
    user_id:{
      type: String,
      default: ''
    },
    created:{
      type:Date,
      default: Date.now
    }
  },
  answer:[{
    user_id:{
      type: String,
      default: ''
    },
    created:{
      type:Date,
      default: Date.now
    },
    body:{
      type: String,
      default: ''
    },
    upvote:{
      type: Number,
      default: 0
    },
    downvote:{
      type: Number,
      default: 0
    }
  }],
  rating:{
    type: Number,
    default: ''
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
