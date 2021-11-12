"use strict";

console.log('routes index start');

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get("/", ctrl.output.StartPage);
router.get("/Calendar", ctrl.output.Calendar);
router.get("/Exercise", ctrl.output.Exercise);
router.get("/Meal", ctrl.output.Meal);
router.get("/ActChange", ctrl.output.ActChange);
router.get("/FindID", ctrl.output.FindID);
router.get("/FindPW", ctrl.output.FindPW);
router.get("/KakaoChange", ctrl.output.KakaoChange);
router.get("/Members", ctrl.output.Members);
router.get("/Members2", ctrl.output.Members2);
router.get("/MyInfo", ctrl.output.MyInfo);

router.post("/Members2", ctrl.process.Members2);



module.exports = router;