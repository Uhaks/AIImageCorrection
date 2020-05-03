let express = require('express')
let http = require('http')
let https = require('https')
let fs = require('fs')
let app = express()

let path = require('path')
let router = express.Router()
const port = 3000
const options = {
	key: fs.readFileSync(path.join(__dirname + '/certification/private.pem')),
	cert: fs.readFileSync(path.join(__dirname +'/certification/public.pem'))
}


app.get('/', function(req, res){
	(req.protocol == 'http') ? res.redirect('https://localhost:3001') :
	res.sendFile(path.join(__dirname +'/index.html'));

})

https.createServer(options, app).listen(port, function(){
	console.log("Express server listening on port " + port);
});
