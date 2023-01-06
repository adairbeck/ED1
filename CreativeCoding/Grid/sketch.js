function setup() {//run once
createCanvas(720,720);//creates a canvas 720x720 pixels
background(92, 114, 255);
}

function draw() {//runs in a loop
fill(185, 169, 245);//fills shape with rgb color
strokeWeight(8);//assigns stroke weight
quad (0,0,
      300,0,
      300,300,
      0,300);
}
