
function moveRight(x,y, grid){
    if (grid.tiles[y][x].img != grid.wallImage){
        //Checking if theres a stone and if it can be moved
        if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img == grid.stoneImage) ||
        (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img == grid.stoneOnGoal)||
        (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x+1].img == grid.stoneImage)||
        ( grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img == grid.stoneOnGoal)) {
            console.log('Cant move stone into stone')
        }
        else if((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x+1].img != grid.wallImage) ||
            (grid.tiles[y][x].img == grid.stoneOnGoal && (grid.tiles[y][x+1].img != grid.wallImage))){
            grid.tiles[y][x].img = grid.playerImage;
            grid.tiles[y][x+1].img = grid.stoneImage;
            grid.tiles[y][x-1].img = grid.grassImage;
            console.log('You tried to move the stone')
            grid.moves++
        }
        //Cant move if thers a wall after
        else if ((grid.tiles[y][x].img == grid.stoneImage && (grid.tiles[y][x+1].img == grid.wallImage)) ||
        (grid.tiles[y][x].img == grid.stoneOnGoal && (grid.tiles[y][x+1].img == grid.wallImage))){
            console.log('Cant move')
        }
        else{
            grid.tiles[y][x].img = grid.playerImage;
            grid.tiles[y][x-1].img = grid.grassImage;
            console.log('Moved right')
            grid.moves++
        }
    }
}
function moveLeft(x, y, grid){
  if (grid.tiles[y][x].img != grid.wallImage){
   //Checking if theres a stone and if it can be moved
   if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.stoneImage) ||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.stoneOnGoal)){
    console.log('Cant move stone into stone')}

   else if((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img != grid.wallImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img != grid.wallImage)){
    grid.tiles[y][x].img = grid.playerImage;
    grid.tiles[y][x-1].img = grid.stoneImage;
    grid.tiles[y][x+1].img = grid.grassImage;
    console.log('You tried to move the stone')
    grid.moves++
  }
  //Cant move if theres a wall after
  else if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y][x-1].img == grid.wallImage)||
  (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y][x-1].img == grid.wallImage)){
    console.log('Cant move')}
    else{
      //If theres no stone
    
  grid.tiles[y][x].img = grid.playerImage;
  grid.tiles[y][x+1].img = grid.grassImage;
  console.log('Moved left')
  grid.moves++
    }
}}
function moveDown(x,y, grid){
  if (grid.tiles[y][x].img != grid.wallImage){
   //Checking if theres a stone and if it can be 
   if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.stoneOnGoal)){
    console.log('Cant move stone into stone')}

   else if((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img != grid.wallImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img != grid.wallImage)){
    grid.tiles[y][x].img = grid.playerImage;
    grid.tiles[y+1][x].img = grid.stoneImage;
    grid.tiles[y-1][x].img = grid.grassImage;
    console.log('You tried to move the stone')
    grid.moves++
  }
  //Cant move if thers a wall after
  else if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y+1][x].img == grid.wallImage)||
  (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y+1][x].img == grid.wallImage)){
    console.log('Cant move')}
    else{
      //If theres no stone
  grid.tiles[y][x].img = grid.playerImage;
  grid.tiles[y-1][x].img = grid.grassImage;
  console.log('Moved down')
  grid.moves++
  
  }
}}
function moveUp(x,y, grid){
  if (grid.tiles[y][x].img != grid.wallImage){
    console.log('First if')
   //Checking if theres a stone and if it can be moved
   if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.stoneImage)||
   (grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.stoneOnGoal)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.stoneImage) ){
    console.log('Cant move stone into stone')}

   else if((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img != grid.wallImage)||
   (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img != grid.wallImage)){
    grid.tiles[y][x].img = grid.playerImage;
    grid.tiles[y-1][x].img = grid.stoneImage;
    grid.tiles[y+1][x].img = grid.grassImage;
    console.log('You tried to move the stone')
    grid.moves++
  }
  //Cant move if thers a wall after
  else if ((grid.tiles[y][x].img == grid.stoneImage && grid.tiles[y-1][x].img == grid.wallImage)||
  (grid.tiles[y][x].img == grid.stoneOnGoal && grid.tiles[y-1][x].img == grid.wallImage)){
    console.log('Cant move')}

    else{
  //If theres no stone
  grid.tiles[y][x].img = grid.playerImage;
  grid.tiles[y+1][x].img = grid.grassImage;
  console.log('Moved up')
  grid.moves++
 
    }
  }
}