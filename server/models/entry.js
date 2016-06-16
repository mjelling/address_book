var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
  userID: { type: String, required: true },
  username: { type: String, required: true },
  last_name: { type: String, required: true },
  first_name: { type: String, required: true },
  email: {type: String },
  mobile_phone: {type: String },
  work_phone: {type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  company: {type: String },
  website_url: {type: String }
  }, { timestamps: true });

module.exports = mongoose.model('Entry', entrySchema);
