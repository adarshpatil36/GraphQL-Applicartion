const customer = require("../../Kafka-backend/controllers/customer");

function handle_request(msg, callback) {
  console.log("Inside book kafka backend");
  console.log(msg);

  const data = customer.create(msg);

  //   books.push(msg);
  callback(null, data);
  console.log("after callback");
}

exports.handle_request = handle_request;
