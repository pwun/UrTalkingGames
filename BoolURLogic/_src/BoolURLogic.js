var BoolURLogic = (function() {
    var that = {},
        canvas, 
        
    init = function() { 
        
        Game.init(); 
        DatabaseController.init();
        SamplesView.init();
         
    }
    ;

    that.init = init;
    return that;
})();