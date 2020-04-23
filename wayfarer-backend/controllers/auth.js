const db = require('../models')
const bcrypt = require('bcrypt')

const register = (req, res) => {
    
    if(!req.body.username || ! req.body.password) {
        return res.status(400).json({
            status : 400,
            message : 'Please enter a name and password'
        })
    }

    db.User.findOne({ username : req.body.username},(err,foundUser)=>{


        if(err) return res.status(500).json({
            status:500,
            message: `There is error here ${err}` 
        })
            
        

        if(foundUser) return res.status(400).json({
            status : 400,
            message : 'This name already exists. Please try with new one '
        })

        bcrypt.genSalt(10,(err,salt) => {
            if(err) return res.status(550).json({
                status : 550, 
                message : `Error here ${err}`
            })

            bcrypt.hash(req.body.password,salt, (err,hash) => {
                if(err) return res.status(530).json({
                    status : 530,
                    message : `Hash errror ${err}`
                })


                const newUser = {
                username = req.body.username,
                password = hash
                }

                db.User.create(newUser, (err, savedUser)=> {
                 if(err)  return res.status(510).json({status:510, message : `There is a problem with creatin user ${err}`})
                 return res.status(200).json({status : 200, message : `${savedUser.username} register`})
                 })
            })
        })
    })
}

