DesignURChar.ConsoleController = (function () {
    var that = {},
        userConsole,
        init = function() {
            userConsole = $('#userConsole');
        },
        
        setText = function(newText) {
            userConsole.text(newText);
        },
        onSelectionChanged = function(shape,color){
            userConsole.text("");
            shape = _stringToUpperCase(shape);
            userConsole.append("my"+shape+" = new "+shape+"('"+color+"');<br/>" );
        },
        onRectCreated = function(x,y,w,h){
            userConsole.append("myRect.setWidth('"+w+"');<br/>");
            userConsole.append("myRect.setHeight('"+h+"');<br/>");
            userConsole.append("myRect.setXPosition('"+x+"');<br/>");
            userConsole.append("myRect.setYPosition('"+y+"');<br/>");
            
         },
        onCircleCreated = function(x,y,rad) {
            userConsole.append("myCircle.setRadius('"+rad+"');<br/>");
            userConsole.append("myCircle.setXPosition('"+x+"');<br/>");
            userConsole.append("myCircle.setYPosition('"+y+"');<br/>");
            
        },
        onStarCreated = function(x,y,size){
            userConsole.append("myStar.setSize('"+size+"');<br/>");
            userConsole.append("myStar.setXPosition('"+x+"');<br/>");
            userConsole.append("myStar.setYPosition('"+y+"');<br/>");
        },
        onLineCreated = function(x,y,color){
            userConsole.text("");
            userConsole.append("myLine.setColor('"+color+"');<br/>");
            userConsole.append("myLine.drawAt('"+x+"','"+y+"');<br/>");
        },
        
        _stringToUpperCase = function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    
    
    ;
    
    that.onSelectionChanged = onSelectionChanged;
    that.onRectCreated = onRectCreated;
    that.onCircleCreated = onCircleCreated;
    that.onStarCreated = onStarCreated;
    that.onLineCreated = onLineCreated;
    that.setText = setText;
    that.init = init;

    return that;
})();