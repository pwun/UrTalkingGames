
Crafty.scene('Level1', function() {
  Game.start(1);
});

Crafty.scene('Level2', function() {
  Game.start(2);
});

Crafty.scene('Level3', function() {
  Game.start(3);
});

Crafty.scene('Victory', function() {
  highscore = 10;
  Crafty.e('2D, DOM, Text')
    .attr({ x: Game.map_grid.tile.width*13, y: Game.map_grid.tile.height*6, w: 150, h:150})
    .text('Geschafft! Du hast '+score+' Punkte erreicht! Zurück zum Menü: beliebige Taste drücken')
    .textFont({
      size: '20px',
      weight: 'bold'
    });
  this.restart_game = this.bind('KeyDown', function() {
    Crafty.scene('MainMenu');
  });
}, function() {
  this.unbind('KeyDown', this.restart_game);
});

Crafty.scene('Lost', function() {
  Crafty.e('2D, DOM, Text')
    .attr({ x: Game.map_grid.tile.width*13, y: Game.map_grid.tile.height*6, w: 150, h:150})
    .text('Du bist leider gescheitert! Zum Neustart beliebige Taste drücken')
    .textFont({
      size: '20px',
      weight: 'bold'
    });
  this.restart_game = this.bind('KeyDown', function() {
    Crafty.scene('MainMenu');
  });
}, function() {
  this.unbind('KeyDown', this.restart_game);
});


Crafty.scene('MainMenu', function(){
  // Start crafty and set a background color so that we can see it's working
  Crafty.init(Game.width(), Game.height());
  Crafty.background('rgb(249, 223, 125)');

  Crafty.sprite("_res/assets/playBtn.png", {spr_btn:[0,0,256,128]});
  Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: Game.map_grid.tile.width*13, y: Game.map_grid.tile.height*6, w: 150, h:150})
    .text('Levelauswahl:')
    .textFont({
      size: '20px',
      weight: 'bold'
    });

    Crafty.e('2D, DOM, Text, Mouse, spr_btn')
      .attr({ x: Game.map_grid.tile.width*13, y: Game.map_grid.tile.height*6 + 60*1, w: 100, h:50})
      .text('Level1')
      .textFont({
        size: '20px',
        weight: 'bold'
      })
      .bind('Click',function(MouseEvent){Crafty.scene('Level1');});

      Crafty.e('2D, DOM, Text, Mouse, spr_btn')
        .attr({ x: Game.map_grid.tile.width*13, y: Game.map_grid.tile.height*6 + 60*2, w: 100, h:50})
        .text('Level2')
        .textFont({
          size: '20px',
          weight: 'bold'
        })
        .bind('Click',function(MouseEvent){Crafty.scene('Level2');});

        Crafty.e('2D, DOM, Text, Mouse, spr_btn')
          .attr({ x: Game.map_grid.tile.width*13, y: Game.map_grid.tile.height*6 + 60*3, w: 100, h:50})
          .text('Level3')
          .textFont({
            size: '20px',
            weight: 'bold'
          })
          .bind('Click',function(MouseEvent){Crafty.scene('Level3');});

    // Place an obstacle at every edge square on our grid of 16x16 tiles
    for (var x = 0; x < Game.map_grid.width; x++) {
      for (var y = 0; y < Game.map_grid.height; y++) {
        var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

        if (at_edge) {
          // Place a tree entity at the current tile
          Crafty.e('Obstacle').at(x,y);
        }
      }
    }
});
