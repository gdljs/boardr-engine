// Board model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BoardSchema = new Schema({
  boardname: { type: String, required: true, trim: true},
  title: { type: String, required: true},
  subtitle: { type: String, required: true, trim: true},
  n_posts: { type: String, required: true, trim: true},
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Board', BoardSchema);
