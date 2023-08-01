require('dotenv').config()
var express = require('express')
var cors = require('cors')
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // host: 'localhost',
    // user: 'root',
    // password:'',
    // database: 'react_nodejs_projcect'
});

var app = express()

app.use(cors())

app.get('/', function (req, res, next) {
    res.json({ msg: 'Hi EVERYONE' })
})
app.get('/users', function (req, res, next) {

    // simple query
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.listen(5000, function () {
    console.log('CORS-enabled web server listening on http://localhost:5000')
})
