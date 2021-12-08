const customer = require("../controllers/customer");

async function handle_request(msg, callback) {
  const data = await customer.login(msg);
  callback(null, data);
}

exports.handle_request = handle_request;
