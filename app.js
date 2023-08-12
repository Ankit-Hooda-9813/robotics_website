
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

const rrr = path.join(__dirname, "/");

// require("dotenv/config");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(rrr));
mongoose.connect(
    process.env.DB_CONNECTION_URL,
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
    // (e, r) => {
    //   if (!e) console.log("connection succ");
    //   else console.log(e);
    // }
  );

  var timageSchema = new mongoose.Schema({
    username: String,
    password: String,
    
  });
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
  let timgModel = new mongoose.model("authentification", timageSchema);
  app.post("/", (req, res, next) => {
    console.log(req.body.name);
    let name = req.body.name.trim();
    name = name + ": ";
    var obj = {
      username: name,
      password: req.body.desc.trim(),
  
    }
    timgModel.create(obj, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        // item.save();
        res.redirect("./jhat.html");
      }
    });
  });
  app.listen(4000,()=>{
    console.log("running");
  })