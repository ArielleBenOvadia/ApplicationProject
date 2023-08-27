const Product = require("../models/productSchema");

const getProductByName = async (name) => {
  const product = await Product.findOne({ name: name });
  return product;
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const getProductByCategory = async (category) => {
  let newCategory = await Product.find();
  newCategory = newCategory.filter(c=>c.category.includes(category))
  return newCategory;
};

const getAll = async () => {
  try {
    const products = await Product.find();
    if (products) {
      return products;
    }
  } catch (err) {}
};

const updateProduct = async (id, product) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product);
    if (updateProduct) {
      return updateProduct;
    }
  } catch (error) {}
};

const deleteProduct = async (id) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (deleteProduct) {
      return deleteProduct;
    }
  } catch (error) {}
};

module.exports = {
    getProductByName,
    getProductById,
    getProductByCategory,
    getAll,
    updateProduct,
    deleteProduct,
};