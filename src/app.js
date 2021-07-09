let express = require("express");
let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
let stream = require("./ws/stream");
let path = require("path");
let favicon = require("serve-favicon");

app.use(favicon(path.join(__dirname, "favicon.ico")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/start", (req, res) => {
  res.sendFile(__dirname + "/startingclass.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
app.get("/revameet", (req, res) => {
  res.sendFile(__dirname + "/loggedteacher.html");
});
app.get("/revameet-student", (req, res) => {
  res.sendFile(__dirname + "/studentjoin.html");
});
app.get("/teacher-login", (req, res) => {
  res.sendFile(__dirname + "/loginTeacher.html");
});
app.get("/student-login", (req, res) => {
  res.sendFile(__dirname + "/loginStudent.html");
});

io.of("/stream").on("connection", stream);

server.listen(process.env.PORT || 3000);
console.log("server is running on port 3000");
