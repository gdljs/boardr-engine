// Post model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  username: { type: String, required: true, trim: true},
  password: { type: String, required: true},
  fullname: { type: String, required: true, trim: true},
  email: { type: String, required: true, trim: true},
  boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }]
});

mongoose.model('Post', PostSchema);
