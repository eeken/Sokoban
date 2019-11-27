import Tile from './Tile.js'

export default {
  components: {
    Tile
  },
    template:`
      <div class="grid-layout">
        <Tile 
          v-for="(tile, i) of flatTiles" 
          v-bind:position="tile" 
          v-bind:key="'tile' + i + tile.x + tile.y">
        </Tile>
      </div>
    `,
    data(){
      return{
        tiles: []
      }
    },
    computed: {
      flatTiles() {
        return this.tiles.flat()
      }
    },
    created() {
      let gameBoard = 5;
      let wallImage = 'css/wall.jpg'
      let stoneImage = 'css/stone.png'
      let playerImage = 'css/player.png'
      let finishImage = 'css/finish.png'
      let grid = [
        ['W', 'W', 'W', 'W', 'W'],
        ['W', ' ', ' ', ' ', 'W'],
        ['W', 'P', 'S', 'F', 'W'],
        ['W', ' ', ' ', ' ', 'W'],
        ['W', 'W', 'W', 'W', 'W']
      ]
      for(let row = 0; row < gameBoard; row++){
        this.tiles[row] = []
        for(let col = 0; col < gameBoard; col++){
          let position = {
            x: col,
            y: row,
            img: Image,
          }
          this.tiles[row].push(position)
          switch (grid[row][col]){
            case "W":
              this.tiles[row][col].img= wallImage;
              break;
              case "S":
              this.tiles[row][col].img= stoneImage;
              break;
              case "P":
                  this.tiles[row][col].img= playerImage;
              break;
              case "F":
                  this.tiles[row][col].img= finishImage;
          }
        }
      }
  

    },
   


}