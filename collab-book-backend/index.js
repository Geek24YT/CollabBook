const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const cors = require("cors");

const app = express();
//Use cors middlewhere

app.use(cors());

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("update-content", (content) => {
    socket.broadcast.emit("receive-update", content);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
