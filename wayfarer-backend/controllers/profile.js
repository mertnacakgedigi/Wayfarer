const db =  require('../models')


const show = (req,res) => {
    db.User.findById(req.params.id,(err,foundUser)=> {
        if (err) return err

        db.City.findById(foundUser.city,(err,foundCity)=> {
            if (err) return err

          let profile = [foundCity,foundUser]
            res.json(profile)
            
        })
    } )
}






module.exports  = {
    show
}





