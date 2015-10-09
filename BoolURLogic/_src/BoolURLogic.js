var BoolURLogic = (function() {
    var that = {},
        canvas, 
        
    init = function() { 
        
        Game.init(); 
        SamplesView.init();
        DatabaseController.init();
        
         
    }
    ;

    that.init = init;
    return that;
})();