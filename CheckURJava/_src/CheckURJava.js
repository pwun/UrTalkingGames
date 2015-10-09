var CheckURJava = (function() {
    var that = {},
        canvas,

    init = function() {
        Game.start();
        SamplesView.init();
        DatabaseController.init();
        
    };
    that.init = init;
    return that;
})();
