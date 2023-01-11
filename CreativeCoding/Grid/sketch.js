function setup() {//run once
createCanvas(720,720);//creates a canvas 720x720 pixels
background(92, 114, 255);
}

function draw() {//runs in a loop
fill(185, 169, 245);//fills shape with rgb color
strokeWeight(8);//assigns stroke weight
translate(60,60);//creates a new origin point 60,60
quad (0,0,
      300,0,
      300,300,
      0,300);

quad (300,0,
      600,0,
      600,300,
      300,300);//add 300 in x direction

quad (0,300,
      300,300,
      300,600,
      0,600);

quad (300,300,
      600,300,
      600,600,
      300,600);//add 300 in x direction
}
