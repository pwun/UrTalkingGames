Game = {

  // This defines our grid's size and the size of each of its tiles
  map_grid: {
    width:  32,
    height: 18,
    tile: {
      width:  16,
      height: 16
    }
  },

  // The total width of the game screen. Since our grid takes up the entire screen
  //  this is just the width of a tile times the width of the grid
  width: function() {
    this.map_grid.tile.width = (window.innerWidth * 0.7)/32;
    return this.map_grid.width * this.map_grid.tile.width;
  },

  // The total height of the game screen. Since our grid takes up the entire screen
  //  this is just the height of a tile times the height of the grid
  height: function() {
    this.map_grid.tile.height = this.map_grid.tile.width;
    return this.map_grid.height * this.map_grid.tile.height;
  },

  // Initialize and start our game
  start: function(levelNum) {

    Crafty.sprite(128, "_res/assets/spritemap.png", {
      spr_player : [ 0, 0 ],
      spr_target:  [ 1, 0 ]
    });


    // Start crafty and set a background color so that we can see it's working
    /*Crafty.init(Game.width(), Game.height());
    Crafty.background('rgb(249, 223, 125)');*/

    // Place a obstacle at every edge square on our grid of 16x16 tiles
    for (var x = 0; x < Game.map_grid.width; x++) {
      for (var y = 0; y < Game.map_grid.height; y++) {
        var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

        if (at_edge) {
          // Place a tree entity at the current tile
          Crafty.e('Obstacle').at(x,y);
        }
      }
    }
    loadLevel(levelNum);
  }
}
