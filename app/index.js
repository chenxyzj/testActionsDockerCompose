const express = require("express");

const APPID = process.env.APPID;

const app = express();

app.get("/",(req,res) => 
 res.send(`APPID: ${APPID} 主页!`));

app.get("/app1",(req,res) => 
 res.send(`APPID: ${APPID} app1's 子页面.`));

app.get("/app2",(req,res) => 
 res.send(`APPID: ${APPID} app2's 子页面.`)); 

app.get("/app3",(req,res) => 
 res.send(`APPID: ${APPID} app3's 子页面.`)); 

app.get("/app4",(req,res) => 
 res.send(`APPID: ${APPID} app4's 子页面.`)); 

 app.listen(APPID,() => console.log(`${APPID} is listening on port ${APPID}...`));
