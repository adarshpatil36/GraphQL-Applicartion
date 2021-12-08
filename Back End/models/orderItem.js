const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderItemSchema = Schema({
  dishId: String,
  orderId: String,
  name: String,
  quantity: Number,
  rating: Number,
});

module.exports = mongoose.model("OrderItem", OrderItemSchema);
