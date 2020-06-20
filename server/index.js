const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')
const db = require('../server/database/server')
const helmet = require('helmet')
const compression = require('compression')

// use express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    // app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(origin))
app.use(compression())
app.use(helmet())


// use view engine
// app.set('view engine', 'jade')

//routes
app
    .get('/', db.getItems)
    .delete('/embry/:id', db.deleteItem)
    .post('/embry', db.addItem)
    .put('/embry/:id', db.updateItem)

let port = process.env.PORT || 5002;

// listen
var server = app.listen(port, () => {
    console.log('server running on port 5002...')
})