// original code take from: http://www.lyceelecorbusier.eu/p5js/?p=2659
// edited by Kiki Woo 28Feb2017
var letter = "K";

function setup(){
  createCanvas(600, 600);
  background(232,149,35);
  stroke(255,0,255);
  noFill();
  textFont("Univers");
  textSize(12);
  textAlign(CENTER, CENTER);
}

function mouseMoved(){
  background(232,149,35);
  noStroke();
  fill(255);
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function mouseDragged(){

  stroke(255,241,0);
  noFill();
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function keyPressed() {
  if (keyCode == CONTROL) save("P_3_0_01.png");
}

function keyTyped(){
      letter = str(key);
  
}
