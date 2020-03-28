const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const weatherReq = require('./requests/weather.request')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index', {weather: null, error: null})
})
app.post('/', async(req, res) => {
    const {city} = req.body
    const {weather, error} = await weatherReq(city)
    
    res.render('index.ejs', {weather, error})
})

app.listen(3000, () => {
    console.log("Server has starten on port 3000...");
    
}) 