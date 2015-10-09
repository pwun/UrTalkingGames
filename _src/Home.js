var Home = (function() {
    var that = {},
         
        
    init = function() {
        $('#prooveCover').on('click', _handleClick);
        $('#designCover').on('click', _handleClick);
        $('#boolCover').on('click', _handleClick);
        $('#checkCover').on('click', _handleClick);
    },
    
    _handleClick = function(e) { 
        switch(e.target.id){
                 
            case 'designCover':
                window.open("DesignURChar/index.html", '_self', false);
                break;
            case 'checkCover':
                window.open("CheckURJava/index.html", '_self', false);
                break;
            case 'boolCover':
                window.open("BoolURLogic/index.html", '_self', false);
                break;
            case 'prooveCover':
                window.open("ProoveURselfinGoogle/index.html", '_self', false);
                break;
             
        }
        
    }
    ;

    that.init = init;
    return that;
})();