var router = require("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../../Back End/utils/passport");

router.get("/", (req, res) => {
  kafka.make_request("address_getAllData", null, function (err, results) {
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
