const express = require("express");
const body parser=require("body-parser");


const app = express();

app.use(bodyparser.urlencoded ({extended:true});

app.get ("/" , function (req,res) {
  res.sendfile(_dirname + "/index.html");

  app.post ("/",function(req,res){
    var n1=Number (req.body.num1);
    var n2=Number(req.body.num2)
    }
res.send("the answer is" + result);


app.listen("3000");
