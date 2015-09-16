
var DesignURCharold = (function() {
    var that = {},
        canvas, 
        webconsole,
        
    init = function() {
        _initCanvas();
        _initMenu();
        _initConsole();
        console.log("fuuuuuuuuck U");
        
         
    },
    _initCanvas = function() {
        canvas = document.getElementById('canvas');
        
        canvas.height = (canvas.width/16)*9;
        console.log(canvas.height);
      },
    _initMenu = function() {
    
    // function to trigger animation
$('.button').click(function() {
  
  // check if the menu-items are hidden behind the button
  if ($('.menu__list').hasClass('hidden')) {
    // add class to make the menu-items drop down
    $('.item1').addClass('list--animation');
    // the following items trigger the animation after a certain delay
    $('.item2').addClass('list--animation--delay1');
    $('.item3').addClass('list--animation--delay2');
    // remove the hidden class from the ul container to show that the items are not hidden anymore
    $('.menu__list').removeClass('hidden');
  }
  else {
    // remove class to make the menu-items disappear
    $('.item1').removeClass('list--animation');
    $('.item2').removeClass('list--animation--delay1');
    $('.item3').removeClass('list--animation--delay2');
    // add the hidden class to the ul container to show that the items are now hidden again 
    $('.menu__list').addClass('hidden');
  }
  
        });    
    },
        
    _initConsole = function() {
        webconsole = $('#console');
            
        webconsole.text( "xD");
       console.log(webconsole   );
    };

    that.init = init;
    return that;
})();