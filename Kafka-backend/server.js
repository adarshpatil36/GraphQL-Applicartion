var connection = new require("./kafka/Connection");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://root:root@cluster0.qpepu.mongodb.net/Uber_Eats?retryWrites=true&w=majority";

// const client = new MongoClient(uri);
mongoose.connect(uri, () => console.log("Connected to DB"));

//topics files
//var signin = require('./services/signin.js');
var Restaurant = require("./services/restaurant.js");
var updateRestaurant = require("./services/updateRestaurant");
var getAllRestaurant = require("./services/getAllRestaurant");
var Customer = require("./services/customer");
var CustomerLogin = require("./services/customerLogin");
var AddDish = require("./services/addDish");
var GetDish = require("./services/getDish");
var AddOrder = require("./services/addOrder");
var GetPastOrder = require("./services/getPastOrder");
var Address = require("./services/address");

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
handleTopicRequest("address_getAllData", Address);
handleTopicRequest("post_restaurant", Restaurant);
handleTopicRequest("post_restaurant_updateData", updateRestaurant);
handleTopicRequest("restaurant_getAllData", getAllRestaurant);
handleTopicRequest("post_customer", Customer);
handleTopicRequest("post_customerLogin", CustomerLogin);
handleTopicRequest("post_dish", AddDish);
handleTopicRequest("get_dishes", GetDish);
handleTopicRequest("post_order", AddOrder);
handleTopicRequest("get_order", GetPastOrder);
