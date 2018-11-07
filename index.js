var express = require('express');
var app = express();
var bodyParser  = require("body-parser");
var port = 19769;
var image;
var image2;
var number=0;
var mongoose  = require('mongoose');
var HomeState = require('./models/homestate')
var Photo = require('./models/photo')

var fs = require('fs');

 


mongoose.connect('mongodb://localhost/NodeDom', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

app.use(express.static('./client')); 
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
var HomeStateCtrl = require('./controller/HomeStateController');
var PhotoCtrl= require('./controller/PhotoController');

var homestate = express.Router();
var photo = express.Router();

homestate.route('/:id')
    .get(HomeStateCtrl.findById)
    .put(HomeStateCtrl.updateHomeState)
    .delete(HomeStateCtrl.deleteHomeState);

homestate.route('/')
  .get(HomeStateCtrl.findAllHomeStates)
  .post(HomeStateCtrl.addHomeState);

photo.route('/:id')
    .get(PhotoCtrl.findById)
    .put(PhotoCtrl.updatePhoto)
    .delete(PhotoCtrl.deletePhoto);

photo.route('/')
  .get(PhotoCtrl.findAllPhotos)
  .post(PhotoCtrl.addPhoto);

app.get('/', function(req, res) {
  res.sendfile('./client/index.html');
})

app.use('/homestate', homestate);
app.use('/photo', photo);

app.post('/', function(req, res) {
  	number=req.body.number;
  	image=req.body.image;
  	image2=Buffer.from(req.body.image, 'base64');
  	res.status(200);
  	res.send();
  	
  	fs.writeFile("imagen.jpg", image,'base64', function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
	});
  	console.log("imagen recibida");
})

app.listen(port, function() {
  console.log("Node server running on http://localhost:"+port)
});
