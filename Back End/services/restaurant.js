const restaurant = require("../controllers/restaurant");

async function handle_request(msg, callback) {
  const data = await restaurant.create(msg);
  callback(null, data);
}

exports.handle_request = handle_request;
