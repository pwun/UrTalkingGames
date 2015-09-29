var CheckURJava = (function() {
    var that = {},
        canvas,

    init = function() {
        console.log("CheckURJava init");
        /*canvas = document.getElementById('canvas');

        canvas.height = (canvas.width/16)*9;
        console.log(canvas.width);
        console.log(canvas.height);*/
        Game.start();
    };
    that.init = init;
    return that;
})();
