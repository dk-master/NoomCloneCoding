import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views",__dirname + "/views");
app.use("/public", express.static(__dirname+ "/public"));
app.get("/", (req,res) => res.render("home")); // home.pug 로 이동 /경로는 
app.get("/*", (req,res) => res.redirect("/")); // 만약 / 이외에 다른 url 경로로 이동한다면 home으로 설정한 / 로 이동하겠다
console.log("hello");

app.listen(3000);