const dishes = require("../../Kafka-backend/controllers/dishes");

async function handle_request(msg, callback) {
  console.log("Inside book kafka backend dish");
  console.log(msg);
  const data = await dishes.findAll(msg);
  callback(null, data);
  console.log("after callback");
}

exports.handle_request = handle_request;
