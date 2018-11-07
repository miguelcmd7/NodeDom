//File: controllers/tvshows.js
var mongoose = require('mongoose');
var HomeState = mongoose.model('HomeState');

//GET - Return all Homestates in the DB
exports.findAllHomeStates = function(req, res) {
	HomeState.find({    
    },null,{
        sort:{
            datetime:-1
        }
    },function(err, homestate_save) {
    if(err) res.send(500, err.message);

    console.log('GET /homestate')
		res.status(200).jsonp(homestate_save);
		// res.send("Hello World!");
	}).sort().limit(1);
};

//GET - Return a HomeState with specified ID
exports.findById = function(req, res) {
	HomeState.findById(req.params.id, function(err, homestate_save) {
    if(err) return res.send(404, err.message);

    console.log('GET /homestate/' + req.params.id);
		res.status(200).jsonp(homestate_save);
	});
};

//POST - Insert a new HomeState in the DB
exports.addHomeState = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var homestate = new HomeState({
		blinds:    req.body.blinds,	
  		temp: req.body.temp,
 		time: req.body.time,
  		datetime: req.body.datetime,
  		clean: req.body.clean,
  		heating: req.body.heating     
		
	});

	homestate.save(function(err, homestate_save) {
		if(err) return res.send(500, err.message);
    console.log('Recived and saved!!');
    res.status(200).jsonp(homestate);
	});
};

//PUT - Update a register already exists
exports.updateHomeState = function(req, res) {
	HomeState.findById(req.params.id, function(err, homestate_save) {
		homestate.blinds   = req.body.blinds;
		homestate.temp = req.body.temp;
		homestate.time  = req.body.time;
		homestate.datetime = req.body.datetime;
		homestate.clean= req.body.clean;
		homestate.heating= req.body.heating;
		homestate.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(homestate_save);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteHomeState = function(req, res) {
	HomeSate.findById(req.params.id, function(err, homestate_detele) {
		homestate.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
