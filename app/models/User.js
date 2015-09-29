// User model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  username: { type: String, required: true, trim: true, unique: true},
  password: { type: String, required: true},
  email: { type: String, required: true, trim: true, unique: true},
  boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
  disabled: { type: Boolean, required: true, 'default': false },
  role: { type: String, required: true, enum: ['user', 'admin'], 'default': 'user'}
});

var salt = bcrypt.genSaltSync(8);
console.log(salt);

// generating a hash
UserSchema.statics.generateHash = function(password) {
  return bcrypt.hashSync(password, salt);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  console.log("yolo: " + password + "swag: " + this.local.password);
  return bcrypt.compareSync(password, this.local.password);
};

mongoose.model('User', UserSchema);
