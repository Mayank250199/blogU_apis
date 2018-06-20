## API structure

###   xxxxxxx : stand for String

###   Token is given as [x-access-token] in header in request having  (**) after given request

### api/users/create         :POST

   firstname : xxxxxxx
   lastname  : xxxxxxx
   email     : xxxxxxx
   username  : xxxxxxx
   password  : xxxxxxx

### api/users        :GET  (ALL user)                                    **

### api/users/:id        :GET/PUT/DELETE  (To get/update/delete user)    **

### api/auth/login     :POST  

   email    : xxxxxxxxxxx
   password : xxxxxxxxxxx

  It gives following data after successfully login
   userid
   name
   token

### api/userdetail/profile    :POST                                      **

    user_id     : above user object_id or mongoose id
    mobile_no   : Number
    profession  : xxxxxxx
    upload_file : jpg

### api/userdetail           :GET                                        **
    it get all the detail of user

### api/userdetail/:id       :GET                                        **
    it get detail of given userid

### api/userdetail/:id       :PUT                                        **
    it helps in update the given detail of users

    user_id     : above user object_id or mongoose id
    mobile_no   : Number
    profession  : xxxxxxx
    upload_file : jpg

### api/userdetail/follower/:id       :PUT                                **
     it helps in adding follower of the user

     user_id  : object_id or mongoose id of user   

### api/userdetail/following/:id      :PUT                                **
     it helps in adding following of the user

      user_id  : object_id or mongoose id of user

### api/userdetail/notification/:id      :PUT                             **
     it helps in adding following of the user

     user_id  : object_id or mongoose id of user
     seen : Boolean
     description: XXXXXXXXXXXX

### api/userdetail/answer/:id      :PUT                                    **
     it helps in adding following of the user

      user_id  : object_id or mongoose id of user
      blog_id  : blog_id or mongoose id of blog to which user answer

### /api/blog/create                :POST                                 **

     title       : xxxxxxxxxx
     category    : xxxxxxxxxx
     body        : xxxxxxxxxx
     user_id     : xxxxxxxxxx

### api/blog        :GET  (ALL blog)                              

### api/blog/:id        :GET/PUT/DELETE  (To get/update/delete blog)     **

### /api/blog/answer/:id                :PUT                             **

     body          : xxxxxxxxxx
     user_id       : xxxxxxxxxx
     upload_file   : jpg or jpeg
