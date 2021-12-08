const restaurant = require("../../Kafka-backend/controllers/restaurant");

function handle_request(msg, callback) {
  console.log("Inside book kafka backend");
  console.log(msg);

  const data = restaurant.update(msg);

  //   books.push(msg);
  callback(null, data);
  console.log("after callback");
}

exports.handle_request = handle_request;
