let allLevels = []

const socket = io.connect("ws://localhost:8001");

function setup() {
  //Creating the optimal (largest) square canvas for the game
  if(windowWidth > windowHeight) {
    new Canvas(windowHeight, windowHeight);
  }
  else {
    new Canvas(windowWidth, windowWidth);
  }

  //Create 3 levels, store in a global array
  for(let i = 0; i < 3; i++) {
    allLevels.push(new Level(30, width/30))
  }

  //Create Player
	ball = new Sprite();
	ball.diameter = 50;
}

function draw() {
    background('grey');

    //Showing only level 1, at least for now.
    allLevels[0].show()

    move();
}

function move() {
    const SPEED = 10;
    if (kb.pressing("w")) {
        ball.pos.y -= SPEED;
    }
    if (kb.pressing("a")) {
        ball.pos.x -= SPEED;
    }
    if (kb.pressing("s")) {
        ball.pos.y += SPEED;
    }
    if (kb.pressing("d")) {
        ball.pos.x += SPEED;
    }
}