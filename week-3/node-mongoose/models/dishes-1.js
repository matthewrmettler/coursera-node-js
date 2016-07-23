//Grab requirements
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create Schema
var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

//Implement schema via model
var Dishes = mongoose.model('Dish', dishSchema);

//Make it available to node app
module.exports = Dishes;
