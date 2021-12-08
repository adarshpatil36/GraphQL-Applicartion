const Order = require("../models/order");

// Create and Save a new Tutorial
exports.create = async (data) => {
  console.log("In create func", data);

  // Validate request
  if (!data.restid) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  try {
    const order = {
      restid: data.restid,
      userid: data.userid,
      name: data.name,
      restaurantPic: data.restaurantPic,
      deliveryAddress: data.deliveryAddress,
      totalAmount: data.totalAmount,
      OrderTime: data.OrderTime,
      orderItems: data.orderItems,
      orderStatus: data.orderStatus,
      additionalInstructions: data.additionalInstructions,
    };

    const response = await Order(order).save();
    return response;
  } catch (error) {
    console.log(error);
  }
};

exports.findAll = async (data) => {
  try {
    const response = await Order.find({ userid: data });
    response.forEach((item) => {
      item.orderItems.forEach((val) => {
        console.log(" item ", item, " val ", val);
      });
    });
    console.log(">> kafka");

    return response;
  } catch (error) {
    console.log(error);
  }
};
