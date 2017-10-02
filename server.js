const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

//body parser to process URL encoded forms
app.use(bodyParser.urlencoded({ extended: true }));

//import routes
require('./app/routes')(app, {});

app.listen(port, () => {
	console.log('Connected on port ' + port);
});