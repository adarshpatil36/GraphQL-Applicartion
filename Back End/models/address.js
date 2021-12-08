const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = Schema({
  type: String,
  address: String,
  userId: String,
});

module.exports = mongoose.model("Address", addressSchema);
