var router = require("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../../Back End/utils/passport");

router.post("/", function (req, res) {
  console.log("Inside Restaurant server");
  kafka.make_request("post_restaurant", req.body, function (err, results) {
    console.log("in result");
    console.log(results);
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again.",
      });
    } else {
      console.log("Inside else");
      res.status(200).send(results);
      res.end();
    }
  });
});
router.post("/updateData", function (req, res) {
  console.log("Inside Restaurant server");
  kafka.make_request(
    "post_restaurant_updateData",
    req.body,
    function (err, results) {
      console.log("in result");
      console.log(results);
      if (err) {
        console.log("Inside err");
        res.json({
          status: "error",
          msg: "System Error, Try Again.",
        });
      } else {
        console.log("Inside else");
        res.json({
          message: "User saved successfully",
        });

        res.end();
      }
    }
  );
});
router.get("/getAllData", (req, res) => {
  kafka.make_request("restaurant_getAllData", null, function (err, results) {
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again.",
      });
    } else {
      console.log("Inside router post", results);
      res.status(200).send(results);
    }
  });
});
module.exports = router;
