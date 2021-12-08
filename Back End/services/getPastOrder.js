const order = require("../controllers/order");

async function handle_request(msg, callback) {
  const data = await order.findAll(msg);
  callback(null, data);
}

exports.handle_request = handle_request;
