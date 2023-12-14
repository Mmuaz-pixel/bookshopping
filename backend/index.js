const express = require('express'); 
const cors = require('cors')
const bodyParser = require('body-parser')
const user = require('./Routes/User')
const cart = require('./Routes/Cart')
const app = express(); 

const PORT = 5000; 
app.use(cors())
app.use(bodyParser.json())

app.use('/user', user); 
app.use('/cart', cart); 

app.listen(PORT, ()=> {
    console.log("App is running on port ", PORT)
})