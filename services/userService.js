const { error } = require("console");
const User = require("../models/userSchema");

const getUserByData = async (data) => {
  const email = data.email
  const myPassword = data.password
  const user = await User.findOne({ email: email });
  if(myPassword === user.password)
      return user;
    // Handle Error
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getAll = async () => {
  try {
    const users = await User.find();
    if (users) {
      return users;
    }
  } catch (err) {}
};

const updateUser = async (id, user) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user);
    if (updatedUser) {
      return updatedUser;
    }
  } catch (error) {}
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      return deletedUser;
    }
  } catch (error) {}
};

module.exports = {
  getUserByData,
  getUserById,
  updateUser,
  getAll,
  deleteUser,
};