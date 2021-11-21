"use strict"

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'minsu0418',
  database: 'body_planner'
});
const sql = "INSERT INTO `body_planner`.`signup` (`ID`, `PW`, `email`, `nickname`, `kakao`, `phone`, `age`, `height`, `weight`, `sex`, `activity`, `goal`, `objectID`, `BMR`, `AMR`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";


class SignUp{
  constructor(body){
    this.body = body;
  }
  WriteDB(){
    const user = this.body;
    console.log('user: '+user.permission);
    let objectId = "Adsf";
    let BMR = 123;
    let AMR = 234;
    var params = [user.id, user.pw, user.email, user.nickname, user.permission, 
    user.tel, user.age, user.height, user.weight, user.gender, user.activity, user.goal, objectId, BMR, AMR];

    connection.query(sql, params, function (err, rows, fields) {
      if(err){
        console.log(err);
      }else{
        console.log("data inserted");
        return "true";
      }
    });
    return "asdg"
  }

}

module.exports = SignUp;