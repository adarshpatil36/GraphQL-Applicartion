const Restaurant = require("../models/restaurant");

// Create and Save a new Tutorial
exports.create = async (data) => {
  console.log("In create func", data);

  // Validate request
  if (!data.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const restaurant = {
    name: data.name,
    tags: data.tags,
    address: data.address,
    description: data.description,
    timings: data.timings,
    rating: data.rating,
    email: data.email,
    password: data.password,
    contact: data.contact,
    deliveryTime: data.deliveryTime,
    deliveryFee: data.deliveryFee,
    country: data.country,
    restaurantPic: data.restaurantPic,
    isRestaurant: data.isRestaurant,
  };

  try {
    console.log("Restaurant", restaurant);

    const response = await Restaurant(restaurant).save();
    const parsedResponse = JSON.parse(JSON.stringify(response));
    delete parsedResponse.password;
    return parsedResponse;
  } catch (error) {
    console.log(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const response = await Restaurant.find();
    // res.send(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (data) => {
  console.log("In restaurant update", data);

  // Validate request
  if (!data.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const restaurant = {
    tags: data.tags,
    address: data.address,
    description: data.description,
    timings: data.timings,
    rating: data.rating,
    email: data.email,
    password: data.password,
    contact: data.contact,
    deliveryTime: data.deliveryTime,
    deliveryFee: data.deliveryFee,
    country: data.country,
    restaurantPic: data.restaurantPic,
    isRestaurant: data.isRestaurant,
  };

  try {
    const query = { name: data.name };
    const response = await Restaurant.findOneAndUpdate(query, restaurant, {
      upsert: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
