const Address = require("../models/address");

exports.findAll = async () => {
  try {
    const response = await Address.find();
    return response;
  } catch (error) {
    console.log(error);
  }
};
