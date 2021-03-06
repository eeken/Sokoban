export default class MapUtils{
  

  static checkAndPlaceGoals(grid){
    
    //Loop to set goal-image when player is not on that tile
    for (let i = 0; i <grid.tiles.length; i++){
     for (let j = 0; j <grid.tiles[i].length; j++){
       if (grid.tiles[i][j].img != grid.playerImage){

       if (grid.grid[i][j] == 'F' && grid.tiles[i][j].img == grid.stoneImage){
         grid.tiles[i][j].img = grid.stoneOnGoal
         
       }
       else if (grid.tiles[i][j].img == grid.stoneOnGoal){
        grid.nrStoneOnGoal++
       }
       
       else if (grid.grid[i][j] == 'F' && grid.tiles[i][j].img != grid.finishImage){
         grid.tiles[i][j].img = grid.finishImage
       }
      
      }
     
}
    }
    }

static addPowerUp(grid){
  for (let i = 0; i <grid.tiles.length; i++){
    for (let j = 0; j <grid.tiles[i].length; j++){
  if (grid.grid[i][j] == 'U' && grid.tiles[i][j].img == grid.playerImage){
    if (grid.powerUpTaken == false){
    grid.remainingPowerups++
    setTimeout(() => {
      if(grid.powerUp == 'Strength'){
        alert('You can now push two stones at once!\nPress Use your Powerup to use it!')
        }
        else {
          alert('You can now bomb a wall!\nPress Use your Powerup to use it and click on a wall!')
        }
    }, 10);
    grid.powerUpTaken = true
      
    }
    else{
 }
   grid.flatTiles = grid.tiles.flat()
   
}
}
  }}

static checkIfCompleted(grid){
      // Check if all stones are on the goal-images
      if(grid.nrStoneOnGoal == grid.nrOfGoals){
        if (confirm(`You completed the level with ${grid.moves} moves! Press OK to continue to the next level!`)) {

          if(grid.level == 1){
            grid.level2()
          }
          else if(grid.level == 2){
            grid.level3()
          }
          else if(grid.level == 3){
            grid.level4()
          }
          else if(grid.level == 4){
            alert('You completed the game! Good job!')
            grid.reset()
          }
        } else {
         grid.reset()
        }
      }
      grid.nrStoneOnGoal = 0
      grid.flatTiles = grid.tiles.flat()
    
    }
    static createAndRenderMap(grid){
      
      for(let row = 0; row <grid.gameBoard; row++){
        grid.tiles[row] = []
        for(let col = 0; col <grid.gameBoard; col++){
          let position = {
            x: col,
            y: row,
            img: '', 
          }
        
          grid.tiles[row].push(position)

      switch (grid.grid[row][col]){
        case "W":
          grid.tiles[row][col].img= grid.wallImage;
          break;
          case "S":
          grid.tiles[row][col].img= grid.stoneImage;
          break;
          case "P":
              grid.tiles[row][col].img= grid.playerImage;
          break;
          case "F":
              grid.tiles[row][col].img= grid.finishImage;
              break;
          case "G":
                grid.tiles[row][col].img = grid.grassImage;
              break;
              case " ":
                grid.tiles[row][col].img = grid.bgImage;
              break;
              case "U":
                grid.tiles[row][col].img = grid.powerUpImage;
                grid.number = Math.floor(Math.random()* 2) + 1;
                if (grid.number == 1){
                  grid.powerUp = 'Strength'
                }
                else{
                  grid.powerUp = 'Wallbreaker'
                }
              break;
      }
    }
  }
}
}
