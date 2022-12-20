const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000



//set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, './resources/views'))
app.set('view engine', 'ejs')


//Assests
app.use(express.static('public'))
app.get('/', (req,res) => {
    res.render('landingpage')
})


app.get('/contact',(req,res) =>{
    res.render('home')
})



app.listen(PORT , () => {
    console.log(`Listening on port ${PORT} `)
})

