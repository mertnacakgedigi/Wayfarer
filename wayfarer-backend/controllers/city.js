const db =  require('../models')

const index = (req,res) => {
    db.City.find({}, (err, allCities) =>{
        if(err) {
            return res.status(400).json({
                staus: 400,
                message: err
            })
        }
        res.json(allCities)
    })
}

const show = (req,res) => {
    db.User.findById(req.params.id,(err,foundUser)=> {
        if (err) return err

        res.json(foundUser)
    })
}



const create = (req, res) => {

    db.City.create(req.body, (err, newCity) => {
        if(err) {
            return res.status(400).json({
                staus: 400,
                message: err
            })
        }


        res.status(201).json(newCity)
    })
}




module.exports  = {
    index,
    create,
    show
}