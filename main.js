const express = require('express')
const app = express()
require('dotenv').config()


//  import Routes 

const userDetailRoutes = require("./routes/userDetails")
app.use(userDetailRoutes)



//  Server Started 

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`server has start on port number ${port}`)
})