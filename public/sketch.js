let socket = io();

socket.on("connect", noConnection);

function noConnection() {
  console.log("your id " + socket.io);
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
background("purple");
}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  ellipse(mouseX, mouseY, 20);
  let message = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", message);
}
