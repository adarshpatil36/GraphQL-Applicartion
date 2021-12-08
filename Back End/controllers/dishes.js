const Dishes = require("../models/dishes");

// Create and Save a new Tutorial
exports.create = async (data) => {
  console.log("In create func", data);

  // Validate request
  if (!data.restaurantId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  try {
    const dishes = {
      name: data.name,
      description: data.description,
      price: data.price,
      rating: data.rating,
      imageURL: data.imageURL,
      restaurantId: data.restaurantId,
    };

    const response = await Dishes(dishes).save();
    return response;
  } catch (error) {
    console.log(error);
  }
};

// exports.bulkCreate = (req, res) => {
//   const dishes = data;
//   console.log(">> ", dishes);

//   Dishes.bulkCreate(dishes, { updateOnDuplicate: ["id"] })
//     .then((dataDB) => {
//       console.log(">> ", dataDB);
//       res.send(dataDB);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     });
// };

exports.findAll = async (data) => {
  try {
    const response = await Dishes.find({ restaurantId: data });
    console.log(">> kafka", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {};

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const id = data.id;

//   Dishes.update(data, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "Dish was updated successfully.",
//         });
//       } else {
//         res.send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or data is empty!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id,
//       });
//     });
// };
