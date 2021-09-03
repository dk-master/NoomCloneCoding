import http from "http"; //node 자체에 이미 설치돼 있어서 http를 설치할 필요가 없다.
import express from "express";
import WebSocket from "ws";
const app = express();

app.set("view engine", "pug");
app.set("views",__dirname + "/views");
app.use("/public", express.static(__dirname+ "/public"));
app.get("/", (req,res) => res.render("home")); // home.pug 로 이동 /경로는 
app.get("/*", (req,res) => res.redirect("/")); // 만약 / 이외에 다른 url 경로로 이동한다면 home으로 설정한 / 로 이동하겠다
const handleListen = console.log("hello");

const server = http.createServer(app); //http서버가 있으면 그위에 ws 서버를 올릴 수 있어!
const wss = new WebSocket.Server({server}); // 이렇게 쓰는 이유는 http서버위에 websocket서버를 같은 포트로 돌리고 싶어서

const handleConnection = (socket) => {
    console.log(socket);
}
wss.on("connection",(socket) => {
    console.log("Connected to Browser ✅");
    socket.on("close", () => console.log("Disconnected from the Broswer❌")
    )
    socket.on('message', (message) => {
        console.log(message);
    })
    socket.send("hello!!")
});
server.listen(3000,handleListen);