const productService = require("../services/productService");
const productSchema = require("../models/productSchema");

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send("Something went wrong -> getProductById"); 
  }
};

const getProductByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const product = await productService.getProductByName(name);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(400).send(null);
    }
  } catch (err) {
    res.status(400).send("Something went wrong -> getProductByName");
  }
};

const getProductByCategory = async (req, res, next) => {
  try {
    const { category } = req.params; 
    const product = await productService.getProductByCategory(category);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(400).send(null);
    }
  } catch (err) {
    res.status(400).send("Something went wrong -> getProductByCategory");
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAll();
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send("Something went wrong -> getAllProducts");
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id, product } = req.body;
    const updateProduct = await productService.updateProduct(id, product);
    if (!updateProduct) {
      res.status(400).json({ error: "Invalid Product format." });
    }
    res.status(200).send(updateProduct);
  } catch (err) {
    res.status(400).send("Something went wrong -> updateProduct");
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.body;
  try {
    const product = await productService.deleteProduct(id);
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send("Something went wrong -> deleteProduct");
  }
};

const createProduct = async (req, res, next) => {
    const { name , description , price , category , image } = req.body;
    try {
      const product = new productSchema({
        name,
        description,
        price,
        category,
        image
      })
      product.save()
      res.status(200).send(product);
    } catch (err) {
      res.status(400).send("Something went wrong -> createProduct");
    }
  };

module.exports = {
  getProductById,
  getProductByName,
  getProductByCategory,
  getAllProducts,
  updateProduct,
  deleteProduct,
  createProduct,
};