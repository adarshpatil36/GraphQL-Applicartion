const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ordersSchema = Schema({
  restid: String,
  userid: String,
  name: String,
  restaurantPic: String,
  deliveryAddress: String,
  orderStatus: String,
  totalAmount: Schema.Types.Decimal128,
  orderTime: String,
  additionalInstructions: String,
  orderItems: [],
});

module.exports = mongoose.model("Order", ordersSchema);
