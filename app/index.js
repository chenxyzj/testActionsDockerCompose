const express = require("express");

const APPID = process.env.APPID;

const app = express();

app.get("/",(req,res) => 
 res.send(`APPID: ${APPID} homepage!`));

app.get("/app1",(req,res) => 
 res.send(`APPID: ${APPID} app1's 页面.`));

app.get("/app2",(req,res) => 
 res.send(`APPID: ${APPID} app2's page.`)); 

 app.get("/app3",(req,res) => 
 res.send(`APPID: ${APPID} app3's page.`)); 
app.listen(APPID,() => console.log(`${APPID} is listening on port ${APPID}...`));
