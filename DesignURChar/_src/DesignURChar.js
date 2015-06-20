var DesignURChar = (function() {
    var that = {},
        canvas, 
        
    init = function() {
        console.log("chardesign init");
        canvas = document.getElementById('canvas');
        
        canvas.height = (canvas.width/16)*9;
        console.log(canvas.width);
        console.log(canvas.height);
         
    }
    ;

    that.init = init;
    return that;
})();