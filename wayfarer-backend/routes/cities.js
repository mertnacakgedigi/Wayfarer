const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')



router.post('/cities',ctrl.city.create)

router.get('/profile/:id',ctrl.profile.show)



module.exports = router