//File: controllers/tvshows.js
var mongoose = require('mongoose');
var Photo  = mongoose.model('Photo');

//GET - Return all tvshows in the DB
exports.findAllPhotos = function(req, res) {
	Photo.find({},null,{
		sort:{
            datetime:-1
        }
	},function(err, photo_save) {
    if(err) res.send(500, err.message);

    console.log('GET /photo')
		res.status(200).jsonp(photo_save);
	}).limit(10);
};

//GET - Return a Photo with specified ID
exports.findById = function(req, res) {
	Photo.findById("5abcdf4067f9cf1b3c24ef36", function(err, photo_save) { //req.params.id
    if(err) return res.send(404, err.message);

    console.log('GET /photo/' + req.params.id);
		res.status(200).jsonp(photo_save);
	});
};

//POST - Insert a new Photo in the DB
exports.addPhoto = function(req, res) {
	console.log('POST');
	console.log(req.body.datetime);

	var photo = new Photo({
		picture: req.body.picture,	
  		datetime: req.body.datetime     
		
	});

	photo.save(function(err, photo_save) {
		console.log(err)
		if(err) return res.send(500, err.message);
    console.log('Guardado'+req.body.datetime);
    res.status(200).jsonp(photo_save);
	});
};

//PUT - Update a register already exists
exports.updatePhoto = function(req, res) {
	Photo.findById(req.params.id, function(err, photo_save) {
		photo.pictute   = req.body.picture;
		photo.datetime = req.body.datetime;
		photo.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(photo_save);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deletePhoto = function(req, res) {
	Photo.findById(req.params.id, function(err, photo) {
		photo.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
