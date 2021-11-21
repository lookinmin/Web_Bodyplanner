"use strict";

console.log("routes ctrl start");

const path = require("path");
const CheckID = require("../../model/CheckID");
const SignUp = require("../../model/SignUp")


var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qwer1234',
  database: 'mysql1'
});

const output = {
  StartPage: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Start_Page.html'));
  },
  Calendar: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'calendar.html'));
  },
  Exercise: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Exer.html'));
  },
  Meal: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Meal.html'));
  },
  ActChange: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'act_change.html'));
  },
  FindID: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'findID.html'));
  },
  FindPW: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'findPW.html'));
  },
  KakaoChange: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'kakao_change.html'));
  },
  Members: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'members.html'));
  },
  Members2: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'members2.html'));
  },
  MyInfo: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'My_info.html'));
  }
}

const process = {
  IDCheck: (req, res) => {
    let result = {success: true};
    const sql = 'select ID from mysql1.bodyplanner where id=ID';
    connection.query(sql, [req.body.id], function (err, rows, fields) {
      if (err) {
        console.log("err: " + err);
      }
      else {
        for (let i = 0; i < rows.length; i++) {
          const colID = SliceJSON(JSON.stringify(rows[i]));
          if (req.body.id === colID) {
            console.log("겹침")
            result.success = false;
            result.msg = "중복 아이디";
            return res.json(result);
          }
        }
      }
      result.success = true;
      return res.json(result);
    });
  },
  Members2: (req, res) => {
    const signUp = new SignUp(req.body);
    const tmp = signUp.WriteDB();
    console.log('tmp: '+tmp);
  }
}

function SliceJSON(str) {
  let strarr = str.split(":");
  let newstr = strarr[1];
  var new_Data;

  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
  if (regExp.test(newstr)) {
    new_Data = newstr.replace(regExp, "");
  }
  return new_Data;
}


module.exports = {
  output,
  process
}