const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SikdanSchema = new Schema({
  Name: String,
  Fav_Carbo : [],
  Fav_Protein : [],
  Fav_Fat : [],
  Fav_etc : [],
  Day1 : [[],[],[],[],[]]
});

module.exports =  mongoose.model('Sikdan', SikdanSchema);