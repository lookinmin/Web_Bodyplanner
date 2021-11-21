"use strict"

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qwer1234',
  database: 'mysql1'
});


class CheckID {
  constructor(body) {
    this.body = body;
  }
  ReadIDs() {
    const inputID = this.body.id;
    let result = {success: {}};
    console.log('CheckID ReadIDS');

    const sql = 'select ID from mysql1.bodyplanner where id=ID';
    connection.query(sql, [inputID], function (err, rows, fields) {
      if (err) {
        console.log("err: " + err);
      }
      else {
        for (let i = 0; i < rows.length; i++) {
          const colID = SliceJSON(JSON.stringify(rows[i]));
          if (inputID === colID) {
            console.log("겹침")
            result =  {success: true, msg:"아이디 중복"};
          }
        }
      }

    });
    console.log('안겹침');
    result = {success: false, msg:"아이디 중복x"};
    return result;
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

module.exports = CheckID;