const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dishesSchema = Schema({
  name: String,
  description: String,
  price: Schema.Types.Decimal128,
  rating: Schema.Types.Decimal128,
  imageURL: String,
  restaurantId: String,
});

module.exports = mongoose.model("Dish", dishesSchema);
