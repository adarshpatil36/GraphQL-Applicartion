const order = require("../controllers/order");

function handle_request(msg, callback) {
  const data = order.create(msg);
  callback(null, data);
}

exports.handle_request = handle_request;
