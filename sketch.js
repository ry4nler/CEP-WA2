let allLevels = []

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
}

function draw() {
  background(220);
  
  //Showing only level 1, at least for now.
  allLevels[0].show()
}