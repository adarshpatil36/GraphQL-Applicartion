const address = require("../../Kafka-backend/controllers/address");

async function handle_request(msg, callback) {
  const data = await address.findAll();
  callback(null, data);
}

exports.handle_request = handle_request;
