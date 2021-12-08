const Customer = require("../models/customer");
const jwt = require("jsonwebtoken");
const { secret } = require("../../Back End/utils/config");

// Create and Save a new Address
exports.create = async (data) => {
  // Validate request
  if (!data.user) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  try {
    const customer = {
      firstName: data.firstName,
      lastName: data.lastName,
      user: data.user,
      email: data.email,
      password: data.password,
      contact: data.contact,
      profilePic: data.profilePic,
      country: data.country,
      isRestaurant: data.isRestaurant || 0,
    };

    const response = await Customer(customer).save();
    return response;
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (data) => {
  // Validate request
  if (!data.user) {
    return "Content can not be empty!";
    // res.status(400).send({
    //   message: "Content can not be empty!",
    // });
    return;
  }

  try {
    const user = await Customer.findOne({
      username: data.user,
      password: data.password,
    });
    if (user) {
      const payload = { _id: user._id, username: user.user };
      const token =
        "JWT " +
        jwt.sign(payload, secret, {
          expiresIn: 1008000,
        });
      const newobj = JSON.parse(JSON.stringify(user));
      delete newobj.password;
      return { token, userData: newobj };
    } else {
      return "Invalid Credentials";
    }
  } catch (error) {
    console.log(error);
  }
};

// Save Tutorial in the database
//   Customer.create(customer)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial.",
//       });
//     });
// };

// exports.findAll = (req, res) => {};

// exports.findOne = (req, res) => {
//   const user = data.user;
//   const password = data.password;

//   Customer.findOne({
//     where: {
//       password: password,
//       [Op.or]: [
//         {
//           user: user,
//         },
//         {
//           email: user,
//         },
//       ],
//     },
//   })
//     .then((data) => {
//       if (data) {
//         const { password, ...postData } = data.dataValues;
//         res.send(postData);
//       } else {
//         res.status(200).send({
//           message: "Invalid Credentials",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(200).send({
//         message: "Invalid Credentials",
//       });
//     });
// };

// exports.update = (req, res) => {};

// exports.delete = (req, res) => {};

// exports.deleteAll = (req, res) => {};

// exports.findAllPublished = (req, res) => {};
