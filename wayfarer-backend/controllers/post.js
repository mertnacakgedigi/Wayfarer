const db =  require('../models')


const createPost = (req,res) => {
    db.Post.create(req.body,(err,newPost) => {
        if (err) {
            return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
          }

    res.json(newPost)
      
    })
}



const showPost = (req, res) =>{
    db.Post.find({user : req.params.id}, (err,userPosts) =>{ 
        if (err) {
            return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
          }

    res.json(userPosts)
 
    })
}

module.exports  = {
    createPost,
    showPost
}
