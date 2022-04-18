const productModel = require("../model/product");

exports.createProduct = (req, res, next) => {
  productModel.create(req.body);
  console.log(req.body);
};
