const mongoose = require("mongoose");
const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
var UsersOnline = 0;
const socket = require('socket.io');

app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use("/user",require("./routes/userRoute"))
app.use("/product",require("./routes/productRoute"))
app.use("/order",require("./routes/orderRoute"))
app.use("/point", require("./routes/pointRoute"))

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

// const server = app.listen(3000,()=>{
//     console.log('Connect to Server');
//     mongoConnect()
// }) 

// const io = require('socket.io')(server, {
//   cors: { origin: "*" }
// });
// io.on('connection', async function(socket){

//   UsersOnline++;
//   socket.on('login', function(data){
//     // saving userId to object with socket ID
//   });
//   socket.on('createPromoCode', function(data) {

//     io.emit('promoCodeCreated', { message: 'Promo code has been created successfully.' });
//   });
//   io.emit('usercnt',UsersOnline);
//   socket.on('disconnect', function(){
//     UsersOnline--;
//     io.emit('usercnt',UsersOnline);

//   });
// });
