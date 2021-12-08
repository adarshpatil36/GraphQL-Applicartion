const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = Schema({
  firstName: String,
  lastName: String,
  user: String,
  email: String,
  password: String,
  contact: String,
  country: String,
  profilePic: String,
  isRestaurant: String,
});

module.exports = mongoose.model("Customer", customerSchema);
