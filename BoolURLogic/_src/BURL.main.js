/* 
*   This is the main function of the game called
*   BOOL UR LOGIC
*   and is made by Mio White
*/


Game = (function() {
    var that = {},
        myString = "Hier Klicken",
        canvas = null,
        ctx = null,
         
        
    init = function() {
        canvas = document.getElementById('canvas');
        canvas.height = (canvas.width/16)*9;
        ctx = canvas.getContext("2d");
        ctx.fillText(myString, 20,20);
        ctx.font = "20px Verdana"
        
        
        
        
        
        
        
        $('#canvas').on('click', _handleClick);
    },
    
    _handleClick = function(e) { 
        myString = ("Canvas clicked,");
        var myString2 = ("motherfucker");
        ctx.clearRect (0, 0, 300, 300);
        ctx.fillText(myString, canvas.width/4,canvas.height/3);
        ctx.fillText(myString2, canvas.width/4,canvas.height/3+40);
        ctx.fillStyle = 'DD9900';
    }
    ;

    that.init = init;
    return that;
})();