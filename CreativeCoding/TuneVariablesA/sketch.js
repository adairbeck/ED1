function setup() {//run once
createCanvas(720,720);//creates a canvas 720x720 pixels
background(179, 255, 237);
}

function draw() {//runs in a loop
fill(185, 169, 245);//fills shape with rgb color
strokeWeight(8);//assigns stroke weight
translate(60,60);//creates a new origin point 60,60

for (var y = 0; y < 600; y = y+300){

  for (var x = 0; x < 600; x = x+300){
    quad (x,y,
          x+300,y,
          x+300,300+y,
          x,300+y);

  }

}



}
