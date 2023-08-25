const express = require('express')
const routes = express.Router()


const userObj = {
    username : "Hasnain",
    email : "hr779656@gmail.com",
    age : "22",
    qualification : "I.com"
}

routes.get("/", (req, res)=>{
    res.status(200).json(userObj)
})


module.exports = routes