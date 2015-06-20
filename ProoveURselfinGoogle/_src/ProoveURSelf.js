var ProoveURSelf = (function() {
    var that = {},
        canvas, 
        
    init = function() {
        
        canvas = document.getElementById('canvas');
        
        canvas.height = (canvas.width/16)*9;
        
         
    }
    ;

    that.init = init;
    return that;
})();