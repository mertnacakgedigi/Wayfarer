const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')

// Profile
router.get('/profile/:id',ctrl.profile.show)
router.put('/profile/:id',ctrl.profile.updateProfile)


// City
router.get('/cities',ctrl.city.index)


//Post

router.post('/cities/:cityId/posts',ctrl.post.createPost)
router.get('/profile/:id/posts',ctrl.post.showPost)
router.put('/cities/:cityId/posts/:postId',ctrl.post.updatePost)
router.delete('/cities/:cityId/posts/:postId',ctrl.post.deletePost)


module.exports = router