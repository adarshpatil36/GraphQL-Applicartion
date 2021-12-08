var connection = new require("./kafka/Connection");
//topics files
//var signin = require('./services/signin.js');
var Restaurant = require("../Back End/services/restaurant.js");
var updateRestaurant = require("../Back End/services/updateRestaurant");
var getAllRestaurant = require("../Back End/services/getAllRestaurant");
var Customer = require("../Back End/services/customer");
var CustomerLogin = require("../Back End/services/customerLogin");
var AddDish = require("../Back End/services/addDish");
var GetDish = require("../Back End/services/getDish");
var AddOrder = require("../Back End/services/addOrder");
var GetPastOrder = require("../Back End/services/getPastOrder");
var Address = require("../Back End/services/address");

function handleTopicRequest(topic_name, fname) {
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  consumer.on("message", function (message) {
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function (err, res) {
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res,
          }),
          partition: 0,
        },
      ];
      producer.send(payloads, function (err, data) {
        console.log(data);
      });
      return;
    });
  });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("post_dish", AddDish);
handleTopicRequest("get_dishes", GetDish);
handleTopicRequest("post_order", AddOrder);
handleTopicRequest("get_order", GetPastOrder);
