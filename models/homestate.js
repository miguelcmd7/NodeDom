var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var HomeState = new Schema({
  blinds:   {type: String,default: false},
  temp:     Number,
  time:  { type: String },
  datetime:    { type: String },
  clean: {type: String},
  heating:{type: String}
});

module.exports = mongoose.model('HomeState', HomeState);
 