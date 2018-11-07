var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var Photo = new Schema({
  picture:  { type: String },
  datetime: { type: String }
});

module.exports = mongoose.model('Photo', Photo);
 