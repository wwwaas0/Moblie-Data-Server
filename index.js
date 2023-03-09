const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const port = 3000;

//smartphone
// app.use(express.json());
// app.post("/smartphone", function (req, res) {
//   fs.writeFile("./sample.json", JSON.stringify(req.body), function () {});
//   res.send("ok");
// });

//rest API
app.post("/smartwatch", function (req, res) {
  fs.writeFile("./sample.json", JSON.stringify(req.body), function () {});
  res.send("ok");
});

// smartphone
// const smartPhone = io.of("/smartphone");
// smartPhone.on("connection", function (socket) {
//   console.log("smartPhone connected");
//   socket.on("acc", (msg) => {
//     console.log(`message: ${msg}`);
//   });
// });

const smartWatch = io.of("/smartwatch");
smartWatch.on("connection", function (socket) {
  console.log("smartWatch connected");
  socket.on("acc", (msg) => {
    console.log(`message: ${msg}`);
  });
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
