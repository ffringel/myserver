var express = require("express");
var data = require("./../data/item-data.json");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json(data);
});

module.exports = router;
