var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require("fs");

var VerifyToken = require(__root + 'user/auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
var Blog = require(__root + 'user/models/Blog');

//storage method in multer
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __root + './uploads/Blog');
  },
  filename: function (req, file, callback) {
    callback(null,  Date.now()+ '-' +file.originalname);
  }
});

var upload = multer({ storage : storage});


/** API for single file upload */
router.post('/create',upload.single('upload_file'), function(req, res) {

  if(!req.file){
      return res.send({
      success :false,
       message:'Error:upload_file can\'t be Blank'
    });
  }

  console.log(req.file)

  var title = req.body.title;
  var category = req.body.category;
  var image = '/uploads/Blog/'+req.file.filename;
  var body = req.body.body;
  var user_id = req.body.user_id;

  if( !title){
    return res.send({
      success :false,
       message:'Error:title can\'t be Blank'
    });
  }
  if ( !category ){
    return res.send({
      success :false,
       message:'Error:category can\'t be Blank'
    });
  }
  if ( !body ){
    return res.send({
      success :false,
       message:'Error:body can\'t be Blank'
    });
  }

      const newblog = new Blog();
      newblog.title = title;
      newblog.category = category;
      newblog.body = body;
      newblog.image.push({pics:image});
      newblog.author.user_id = user_id;

    newblog.save((err,user) =>{
      if(err){
        return res.send({
        success:false,
        message:"Error:server Error"
      })
    }
        return res.send({
        success:true,
        message:"Blog Created successfully!!"
      })

    })
    });

  // RETURNS ALL THE USERS IN THE DATABASE
    router.get('/',function (req, res) {
        Blog.find({}, function (err, blogs) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(blogs);
        });
    });

    // DELETES A USER FROM THE DATABASE
    router.delete('/:id', function (req, res) {
        Blog.findByIdAndRemove(req.params.id, function (err, blog) {
            if (err) return res.status(500).send("There was a problem deleting the user.");
            res.status(200).send("Blog: "+ blog.blog +" was deleted.");
        });
    });

    router.put('/:id',VerifyToken, function (req, res) {
        Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, blog) {
            if (err) return res.status(500).send("There was a problem updating the blog.");
            res.status(200).send(blog);
        });
     });

     router.put('/answer/:id',upload.single('upload_file'), function (req, res) {

       if(!req.file){
           return res.send({
           success :false,
            message:'Error:upload_file can\'t be Blank'
         });
       }

       var image = req.file.path;
       var body = req.body.body;
       var user_id = req.body.user_id;

     Blog.findByIdAndUpdate(req.params.id,
          {$push: {answer: { user_id: user_id, body: body, image:image} } },
          {new: true}, function (err, answer) {
            if (err) return res.status(500).send("There was a problem updating the blog.");
            res.status(200).send({answer_id: answer._id,blog:req.params.id});
        });
     });



module.exports = router;
