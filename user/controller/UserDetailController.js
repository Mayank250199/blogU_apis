var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require("fs");

var VerifyToken = require(__root + 'user/auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
var User_Detail = require(__root + 'user/models/User_Detail');

//storage method in multer
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __root + './uploads/Profile');
  },
  filename: function (req, file, callback) {
    callback(null,  Date.now()+ '-' +file.originalname);
  }
});

var upload = multer({ storage : storage});


/** API for single file upload */
router.post('/profile',upload.single('upload_file'), function(req, res) {

  if(!req.file){
      return res.send({
      success :false,
       message:'Error:upload_file can\'t be Blank'
    });
  }
  var user_id = req.body.user_id;
  var mobile_no = req.body.mobile_no;
  var profile_pic = req.file.path;
  var profession = req.body.profession;


  if( !user_id ){
    return res.send({
      success :false,
       message:'Error:user_id can\'t be Blank'
    });
  }
  if ( !mobile_no ){
    return res.send({
      success :false,
       message:'Error:mobile_no can\'t be Blank'
    });
  }
  if( !profession ){
      return res.send({
      success :false,
       message:'Error:profession can\'t be Blank'
    });
  }


      const newSubject = new User_Detail();
    newSubject.user_id = user_id;
    newSubject.mobile_no = mobile_no;
    newSubject.profession = profession;
    newSubject.profile_pic = profile_pic;
    newSubject.save((err,user) =>{
      if(err){
        return res.send({
        success:false,
        message:"Error:server Error"
      })
    }
        return res.send({
        success:true,
        message:"User Created successfully!!"
      })

    })
    });


    // RETURNS ALL THE USERS IN THE DATABASE
    router.get('/',function (req, res) {
        User_Detail.find({}, function (err, users) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
        });
    });

    // GETS A SINGLE USER FROM THE DATABASE
    router.get('/:id',VerifyToken, function (req, res) {
        User_Detail.findById(req.params.id, function (err, user) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!user) return res.status(404).send("No user found.");
            res.status(200).send(user);
        });
    });

    // DELETES A USER FROM THE DATABASE
    router.delete('/:id', function (req, res) {
        User_Detail.findByIdAndRemove(req.params.id, function (err, user) {
            if (err) return res.status(500).send("There was a problem deleting the user.");
            res.status(200).send("User: "+ user +" was deleted.");
        });
    });

    // UPDATES A SINGLE USER IN THE DATABASE
    // Added VerifyToken middleware to make sure only an authenticated user can put to this route
    router.put('/:id',VerifyToken, function (req, res) {
        User_Detail.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
            if (err) return res.status(500).send("There was a problem updating the user.");
            res.status(200).send(user);
        });
    });

    router.put('/follower/:id',VerifyToken, function (req, res) {

      var user_id = req.body.user_id;

    if( !user_id ){
        return res.send({
          success :false,
           message:'Error:user_id can\'t be Blank'
        });
      }

      User_Detail.findByIdAndUpdate(req.params.id,
         {$push: {followers: { user_id: user_id } } },
         {new: true}, function (err, user) {
           if (err) return res.status(500).send("There was a problem updating the user.");
           res.status(200).send(user);
       });
    });

    router.put('/following/:id',VerifyToken, function (req, res) {

      var user_id = req.body.user_id;

    if( !user_id ){
        return res.send({
          success :false,
           message:'Error:user_id can\'t be Blank'
        });
      }

      User_Detail.findByIdAndUpdate(req.params.id,
         {$push: {following: { user_id: user_id } } },
         {new: true}, function (err, user) {
           if (err) return res.status(500).send("There was a problem updating the user.");
           res.status(200).send(user);
       });
    });


    router.put('/notification/:id',VerifyToken, function (req, res) {

      var user_id = req.body.user_id;
      var seen = req.body.seen;
      var description = req.body.description;

    if( !user_id ){
        return res.send({
          success :false,
           message:'Error:user_id can\'t be Blank'
        });
      }

      User_Detail.findByIdAndUpdate(req.params.id,
         {$push: {notification: { user_id: user_id , seen:seen , description:description} } },
         {new: true}, function (err, user) {
           if (err) return res.status(500).send("There was a problem updating the user.");
           res.status(200).send(user);
       });
    });


    router.put('/answer/:id',VerifyToken, function (req, res) {

      var answer_id = req.body.answer_id;
      var blog_id = req.body.blog_id;

    if( !answer_id ){
        return res.send({
          success :false,
           message:'Error:answer_id can\'t be Blank'
        });
      }

      if( !blog_id ){
          return res.send({
            success :false,
             message:'Error:blog_id can\'t be Blank'
          });
        }

      User_Detail.findByIdAndUpdate(req.params.id,
         {$push: {answer: { blog_id: blog_id ,  answer_id:answer_id } } },
         {new: true}, function (err, user) {
           if (err) return res.status(500).send("There was a problem updating the user.");
           res.status(200).send(user);
    });

});
module.exports = router;
