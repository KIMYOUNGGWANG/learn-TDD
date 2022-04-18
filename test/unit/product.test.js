const productController = require("../../controller/product");
const productModel = require("../../model/product");
const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");
productModel.create = jest.fn();

describe("Product Controller Create", () => {
  it("should habe a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
  it("should call ProductModel.create", () => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    let next = null;
    req.body = newProduct;
    //productController.createProduct()호출하면 model에 create를 호출하는지 테스트
    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });
});
