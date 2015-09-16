DesignURChar.ConsoleController = (function () {
    var that = {},
        userConsole,
        init = function() {
            userConsole = $('#userConsole');
        },
        
        setText = function(newText) {
            userConsole.text(newText);
        },
        selected = function(shape,fill){
            userConsole.text("");
            userConsole.append("You selected a "+fill+" "+shape +  "<br/>");
        },
        created = function(x,y,w,h,fill,shape) {
            userConsole.append("Grats, you created a "+fill+" "+shape+" at ("+x+"/"+y+")... w= "+w+" h= "+h +"<br/>");
            
        };
    
    that.selected = selected;
    that.created = created;
    that.setText = setText;
    that.init = init;

    return that;
})();