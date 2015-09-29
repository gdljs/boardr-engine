// User model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true, trim: true},
  password: { type: String, required: true},
  email: { type: String, required: true, trim: true},
  boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
  disabled: Boolean,
  role: { type: String, required: true, enum: ['user', 'admin']}
});

mongoose.model('User', UserSchema);
