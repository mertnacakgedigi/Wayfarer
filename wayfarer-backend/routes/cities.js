const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')



router.get('/cities',ctrl.city.index)

router.get('/profile/:id',ctrl.profile.show)



module.exports = router