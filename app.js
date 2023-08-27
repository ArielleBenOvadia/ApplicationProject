const mongoose = require("mongoose");
const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use("/user",require("./routes/userRoute"))
app.use("/product",require("./routes/productRoute"))
app.use("/order",require("./routes/orderRoute"))

const mongoConnect = () => 
{
  mongoose.connect("mongodb+srv://OceanTeam:OceanTeam1234@cluster0.hezqiam.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};

app.listen(3000,()=>{
    console.log('Connect to Server');
    mongoConnect()
}) 