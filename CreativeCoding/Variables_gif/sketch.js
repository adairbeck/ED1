//create a program that enables us to customize the number of squares in a grid
let img;

function preload (){
  gif = loadImage ('assets/AdairGraphicWeb.png')
}

function setup() {//run once
createCanvas(windowWidth,windowWidth);//creates a canvas 720x720 pixels
}

function draw() {//runs in a loop
fill('fuchsia');//fills shape with rgb color
strokeWeight(1);//assigns stroke weight

var num =5; //number of sides in the array
var sideLen = windowWidth/num ;//side length variable

for (var y = 0; y < windowWidth; y = y+sideLen){
  for (var x = 0; x < windowWidth; x = x+sideLen){

image (img, x, y, windowWidth/num; windowWidth/num);
  }

}



}
