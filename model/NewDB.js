"use strict"

const schema = require("../model/schema.js");

class NewDB{      //새로운 회원에 대한 첫번째 스키마 작성
  static async MakeNewDB(dataArr) {
    await this.WriteNewDB(dataArr);
  }

  static WriteNewDB(dataArr){
    const new_member = new schema({
      Name : dataArr[0],
      Fav_Carbo : [],
      Fav_Protein : [],
      Fav_Fat : [],
      Fav_etc : [],
      Day1 : [[],[],[],[],[]]
    })
    new_member.save()
      .then(() => {
        console.log('유저 ID 생성');
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  }
}

module.exports = NewDB;

