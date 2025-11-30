//array to hold treasure data
let treasure = [];
//variable to hold player data
let player;
//set player width:
let pW = 10;
//declare treasure width:
let tW;
//declare number of treasures
let treasures;
//specify speed of player for keyboard controls
let speed = pW*1.25;

function setup() {
  //full size canvas
  createCanvas(windowWidth, windowHeight);
  noCursor();
  treasures = windowWidth/5;
  
  //add specified number of 'treasures' data to the treasure array with random placement between 0 and the width/height minus the width/height of the treasure  
  for (i=0;i<treasures;i++) {
    tW = random(2,25);
    treasure.push(new Box(random(tW*2, width-tW*2), random(tW, height-tW*2), tW, 'random'));
  }
  
  
  //assign the player data
  player = new Box(10, 10, pW, 255);
}

function draw() {
  background(0);
  noStroke();
  //method to show player (defined in Box.js)
  player.display();
  
  //loop to display all treasures in the treasure array
  for (i=0; i<treasure.length; i++) {
    treasure[i].display();
  }
  
  //logic to see if any treasure is touching the player, if true, remove that treasure from the array
  for (i=0; i<treasure.length; i++) {
    if (treasure[i].touching() == true) {
      treasure.splice(i, 1);
    }
  }
  
  //if there are no more treasures, display "You Win!"  
  if (treasure.length == 0) {
    fill("green");
    textAlign(CENTER, CENTER);
    textSize(30);
    text("You Win!", width/2, height/2);
    player.win();
  }
}

//movement logic for player
// function keyPressed() {
//   if (key == "w" || keyCode == UP_ARROW) {
//     player.y -= speed;
//   }
//   if (key == "s" || keyCode == DOWN_ARROW) {
//     player.y += speed;
//   }
//   if (key == "d" || keyCode == RIGHT_ARROW) {
//     player.x += speed;
//   }
//   if (key == "a" || keyCode == LEFT_ARROW) {
//     player.x -= speed;
//   }
//}


//make mobile/keyboardless friendly
function mouseMoved() {
  player.x = mouseX
  player.y = mouseY;
}

function mouseDragged() {
  player.x = mouseX
  player.y = mouseY;
}