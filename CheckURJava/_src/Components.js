// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },

  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  }
});

Crafty.c('Obstacle', {
  init: function() {
    this.requires('2D, Canvas, Grid, Color, Solid')
    .attr({w: Game.map_grid.tile.width - 4 ,h: Game.map_grid.tile.height -4})
    .color('rgb(255, 153, 0)');
  },
});


Crafty.c('Player', {
  init: function() {
    this.requires('2D, Canvas, Grid, Collision, Fourway, spr_player')
    .attr({w: Game.map_grid.tile.width - 4 ,h: Game.map_grid.tile.height -4})
    .fourway(4)
    .origin("center")
    .onHit('Solid', function(){
      Crafty.scene('Lost');
    })
    .onHit('Win', function(){
      Crafty.scene('Victory');
    });
  },
});

Crafty.c('Target', {
  init: function() {
    this.requires('2D, Canvas, Grid, Win, spr_target')
    .attr({w: Game.map_grid.tile.width ,h: Game.map_grid.tile.height});
  },
});
