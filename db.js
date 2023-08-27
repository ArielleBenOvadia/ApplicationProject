const mongoose = require("mongoose");

const mongoConnect = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};

module.exports = mongoConnect;