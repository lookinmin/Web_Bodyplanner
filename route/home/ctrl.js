"use strict";

console.log("routes ctrl start");

const path = require("path");

const output = {
  StartPage: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'Start_Page.html'));
  },
  Calendar: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'calendar.html'));
  },
  Exercise: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'Exer.html'));
  },
  Meal: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'Meal.html'));
  },
  ActChange: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'act_change.html'));
  },
  FindID: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'findID.html'));
  },
  FindPW: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'findPW.html'));
  },
  KakaoChange: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'kakao_change.html'));
  },
  Members: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'members.html'));
  },
  Members2: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'members2.html'));
  },
  MyInfo: (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'HTML', 'My_info.html'));
  }
}

const process = {
  Members2: (req, res) => {
    console.log("members", req.body);
    //req.body로 받은 데이터 처리 -> 
  }
}

module.exports = {
  output,
  process
}