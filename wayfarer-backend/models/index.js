const mongoose = require('mongoose')
const dbUrl =  "mongodb://localhost:27017/wayfarer-backend/wayfarer"


mongoose.connect(dbUrl, {
    useNewUrlParser : true,
    useFindAndModify : false,
    useCreateIndex : true,
    useUnifiedTopology : true
}) 
    .then(()=> console.log("MongoDB Connected .."))
    .catch((err)=> console.log(`There is an ${err}`))


module.exports = {
    User : require('./user'),
    City : require('./city'),
    Post : require('./post')
}