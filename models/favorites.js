// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// dishSchema
var favoriteSchema = new Schema({
    postedBy  : { type: Schema.Types.ObjectId, ref: 'User' },
    dishes :  [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
}, {
  timestamps: true
});


// the schema is useless so far
// we need to create a model using it
var favorites = mongoose.model('Favorites', favoriteSchema);

// make this available to our Node applications
module.exports = favorites;
