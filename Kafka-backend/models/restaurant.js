const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = Schema({
  name: String,
  tags: String,
  address: String,
  description: String,
  timings: String,
  deliveryTime: String,
  deliveryFee: String,
  rating: Number,
  email: String,
  password: String,
  contact: String,
  country: String,
  restaurantPic: String,
  isRestaurant: Boolean,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
