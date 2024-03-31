class Level {
  constructor(cellCount, cellSize) {
    this.cellCount = cellCount
    this.cellSize = cellSize
    
    this.cells = []
    this.neighbourCount = []
    
    //Initialising a 2D array for all the cells in the level; setting all cell values to 0.
    //Essentially, imagine a square with length cellCount. Every unit area is 1 cell.
    for(let i = 0; i < this.cellCount * this.cellCount; i++) {
      let j = round(random(0, 1))
      if(j == 0) {
        this.cells.push(0)
      }
      else if(j == 1) {
        this.cells.push(1)
      }
    }
    
    this.levelCreate()
  }
  
  
  
  levelCreate() {
    for(let k = 0; k < 3; k++) {
      //Counting the number of neighbours
      for(let i = 0; i < this.cells.length; i++) {
        let myNeighbourCount = 0
        for(let y = floor(i / this.cellCount) - 1; y < floor(i / this.cellCount) + 2; y++) {
          for(let x = (i % this.cellCount) - 1; x < (i % this.cellCount) + 2; x++) {
            //Allowing for those special exceptions: the wraparound
            let finalX = x
            let finalY = y
            if(x == -1) {
              finalX = this.cellCount -1
            }
            if(x == this.cellCount) {
              finalX = 0
            }
            if(y == -1) {
              finalY = this.cellCount -1
            }
            if(y == this.cellCount) {
              finalY = 0
            }
         
            let neighbourIndex = finalY * this.cellCount + finalX
          
            //Checks the state of neighbour. If neighbour is alive, myNeighbourCount +1
            if(this.cells[neighbourIndex] == 1 && neighbourIndex !== i) {
              myNeighbourCount++
            }
          }
        }
        this.neighbourCount[i] = myNeighbourCount
      }
  
      //The Modified Game of Life Algorithm (B3/S12345)
      //https://conwaylife.com/wiki/OCA:Maze
      for(let i = 0; i < this.cells.length; i++) {
        //Death from underpopulation
        if(this.neighbourCount[i] < 1) {
          this.cells[i] = 0
        }
        //Survival when between 1 and 5 neighbours
        else if((this.neighbourCount[i] >= 1 && this.neighbourCount[i] <= 5) && this.cells[i] == 1) {
          this.cells[i] = 1
        }
        //Birth when 3 neighbours
        else if(this.neighbourCount[i] == 3 && this.cells[i] == 0) {
          this.cells[i] = 1
        }
        //Death from overpopulation
        else if(this.neighbourCount[i] > 5) {
          this.cells[i] = 0
        }
      }
    }
  }
  
  
  
  show() {
    for(let y = 0; y < this.cellCount; y++) {
      for(let x = 0; x < this.cellCount; x++) {
        let index = (y * this.cellCount + x)
        let state = this.cells[index]
        
        if(state == 0) {
          fill(255, 255, 255)
        }
        else if(state == 1) {
          fill(0, 0, 0)
        }
      
        let startX = x * this.cellSize
        let startY = y * this.cellSize
      
        rect(startX, startY, this.cellSize, this.cellSize)
      }
    }
  }
}