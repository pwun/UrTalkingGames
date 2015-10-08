var CheckURJava = (function() {
    var that = {},
        canvas,

    init = function() {
        Game.start();
        DatabaseController.init();
        SamplesView.init();
    };
    that.init = init;
    return that;
})();
