let socket = io();
let myColor = "white";

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer);

function newPlayer(newPlayerColor) {
console.log(newPlayerColor);

push()
fill("purple");
rectMode(CENTER);
noStroke();
rect(width/2, height/2, width, 50);
pop()

textAlign(CENTER);
textSize(30);
fill(newPlayerColor);
text("New player joined: " + newPlayerColor, width/2, height/2);
}

function setColor(assignedColor) {
myColor = assignedColor;
// text("Welcome " + myColor, width/2, height/2);
}


function newConnection() {
  console.log("your id " + socket.id);
}

function drawOtherMouse(data) {
  push();
  fill(data.color);
  ellipse(data.x, data.y, 20);
  pop();
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
  fill(myColor);
  ellipse(mouseX, mouseY, 20);
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  };

  socket.emit("mouse", message);
}
