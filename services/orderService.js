// Get order data from DB 

const Order = require("../models/orderSchema");

const getAll = async () => {
  try {
    const orders = await Order.find()//.populate("user").populate("products")
    if (orders) {
      return orders;
    }
  } catch (err) { }
};

const getOrderById = async (id) => {
  try {
    const order = await Order.findById(id);
    if (order) {
      return order;
    }
  } catch (err) {
  }
};

const createOrder = async (order) => {
  try {
    const newOrder = new Order({
      user: order.user,
      products: order.games,
      orderNumber: order.orderNumber,
    });
    const savedOrder = await newOrder.save();
    if (savedOrder) {
      return savedOrder;
    }
  } catch (error) {
  }
};

const updateOrder = async (id, order) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate({ _id: id }, order);
    if (updatedOrder) {
      return updatedOrder;
    }
  } catch (error) {
  }
};

const deleteOrderById = async (id) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (deletedOrder) {
      return deletedOrder;
    }
  } catch (error) {
  }
};

module.exports = {
  getAll,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrderById,
};
