const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static("public"));

var connected = [
  ""
]

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/dreams", (request, response) => {
  response.sendFile(__dirname + "/views/dreams.html");
});

app.get("/dreams/get", (request, response) => {
  response.json(connected);
});

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

io.on('connection', function(socket){
  console.log('A user connected.');
  socket.on('Login', (data) =>{
    if(data.user == process.env.adminuser && data.password == process.env.adminpass){
      
    }
    else if(data.user == process.env.observeruser && data.password == process.env.observerpass){
      
    }
    else{
      socket.emit('response', {response: "failed"});
    }
  });
});