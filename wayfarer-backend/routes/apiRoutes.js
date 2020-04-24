const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')

// Profile
router.get('/profile/:id',ctrl.profile.show)
router.put('/profile/:id',ctrl.profile.updateProfile)


// City
router.get('/cities',ctrl.city.index)


module.exports = router