//create a program that enables us to customize the number of squares in a grid

function setup() {//run once
createCanvas(windowWidth,windowWidth);//creates a canvas 720x720 pixels
}

function draw() {//runs in a loop
fill(185, 169, 245);//fills shape with rgb color
strokeWeight(1);//assigns stroke weight

var num =30; //number of sides in the array
var sideLen = windowWidth/num ;//side length variable

for (var y = 0; y < windowWidth; y = y+sideLen){
  for (var x = 0; x < windowWidth; x = x+sideLen){
    quad (x,y,
          x+sideLen,y,
          x+sideLen,sideLen+y,
          x,sideLen+y);

  }

}



}
