"use strict";
const NewDB = require("./NewDB");

class MakeNew{
  constructor(body) {
    this.body = body;
  }
  async MakeMainDB(){
    console.log('DB ON');
    await NewDB.MakeNewDB(this.body); //문제 입력한 String value NewDB 로 넘김
  }
}

module.exports = MakeNew;

