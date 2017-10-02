const noteRoutes = require('./note_routes');

//export route funtion through index.js
module.exports = function(app, db){
	noteRoutes(app,db);
};