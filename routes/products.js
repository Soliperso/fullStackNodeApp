const express = require("express");
const router = express.Router();
const Product = require("../models/product");


//INDEX - show all products
router.get("/", (req, res) => {
    Product.find({}, (err, products) => {
      if (err) {
        console.log(err);
      } else {
        res.render("products/index", { products });
      }
    });
  });


module.exports = router;
