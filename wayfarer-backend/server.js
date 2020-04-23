//Configurations 

const express = require('express')
const app = express()

const routes = require('./routes')



// Server start

app.listen(3001, () => {
    console.log("Server is running at localhost:3001")
})