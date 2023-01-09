//create a program that enables us to customize the number of squares in a grid

function setup() {//run once
createCanvas(720,720);//creates a canvas 720x720 pixels
}

function draw() {//runs in a loop
fill(185, 169, 245);//fills shape with rgb color
strokeWeight(1);//assigns stroke weight

for (var y = 0; y < 720; y = y+360){
  for (var x = 0; x < 720; x = x+360){
    quad (x,y,
          x+360,y,
          x+360,360+y,
          x,360+y);

  }

}



}
