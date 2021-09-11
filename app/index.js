const express = require("express");

const APPID = process.env.APPID;

const app = express();

app.get("/",(req,res) => 
 res.send(`APPID: ${APPID} homepage!`));

app.get("/app1",(req,res) => 
 res.send(`APPID: ${APPID} app1's page.`));

app.listen(APPID,() => console.log(`${APPID} is listening on port ${APPID}...`));
