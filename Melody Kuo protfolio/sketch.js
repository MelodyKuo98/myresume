var img1;
var img2;
var img3;
var img4;
var x = mouseX;
var y = mouseY;
var rotationAngle = 0; // Initial rotation angle


function preload(){
  img1 = loadImage("Redux Applications_Page_2.jpg");
  img2 = loadImage("KuoM_Postcard_Prelims_Page_1.jpg");
  img3 = loadImage("KuoM_Album Cover_Lauv.jpg");
  img4 = loadImage("KuoM_Get out the Vote poster.jpg");
} 


function setup() {
  noStroke();
  var canvas = createCanvas(1730,1000);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  // canvas.parent('sketch-holder');
}


function draw() {
  background(255); // Clear the canvas

  
  if (mouseX >= 0 && mouseX <= 860 && mouseY >= 0 && mouseY <= 500) {
    image(img1, 0, 0, 860, 500);
  } else {
    fill(156, 222, 255); // BlueFill
    rect(0, 0, 860, 500);
  }

  
  if (mouseX >= 860 && mouseX <= 1720 && mouseY >= 0 && mouseY <= 500) {
    image(img2, 860, 0, 860, 500);
  } else {
    fill(165, 240, 167); // GreenFill
    rect(860, 0, 860, 500);
  }

  
  if (mouseX >= 0 && mouseX <= 860 && mouseY >= 500 && mouseY <= 1000) {
    image(img3, 0, 500, 860, 500);
  } else {
    fill(255, 225, 146); // YellowFill
    rect(0, 500, 860, 500);
  }

  
  if (mouseX >= 860 && mouseX <= 1720 && mouseY >= 500 && mouseY <= 1000) {
    image(img4, 860, 500, 860, 500);
  } else {
    fill(255, 188, 205); // RedFill
    rect(860, 500, 860, 500);
  }
}