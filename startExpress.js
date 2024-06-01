const express =require("express");
const app= express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extend:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.set(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    console.log("request acceoted")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  });
