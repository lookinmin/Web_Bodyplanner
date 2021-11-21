"use strict"

const PORT = 8000;
const app = require("../app");

const mongoDB = require("mongodb");
const mongoose = require('mongoose');
const mongoClient = mongoDB.MongoClient;
// const url = "mongodb+srv: minsu:minsu0418@cluster0.lehll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const json = '{"mongoURL" : "mongodb+srv://minsu:minsu0418@cluster0.lehll.mongodb.net/bodyplanner?retryWrites=true&w=majority"}';
const obj = JSON.parse(json);
const uri = obj.mongoURL;


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection succes");
  app.listen(PORT, () => {
    console.log("서버가동");
  });
});

