let socket = io();

socket.on("connect", noConnection);
socket.on("mouseBroadcast", drawOtherMouse);

function noConnection() {
  console.log("your id " + socket.io);
}

function drawOtherMouse(data) {
  fill("yellow");
  ellipse(data.x, data.y, 20);
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
  fill("white");
  ellipse(mouseX, mouseY, 20);
  let message = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", message);
}
