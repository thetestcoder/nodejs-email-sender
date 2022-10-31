const express = require('express')

const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))


//ROUTES
require('./routes/index')(app)





const startApp = async () =>{
    try {
        app.listen(process.env.APP_PORT || 3000)
        console.log("Application started")
    }catch (e) {
        console.log(e)
    }
}

startApp().catch(console.error);