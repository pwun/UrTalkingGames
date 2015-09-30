Game = (function() {
    var that = {},
        time = 0,
         
        
    init = function() {
        var turotialYetActivated = false;
        $('#logo').on('click', function(){ location.reload();});
        $('#newGame').on('click', function(){ location.reload();});
        $('#el1').on('click', _handleClick);
        $('#el2').on('click', _handleClick);
        $('#el3').on('click', _handleClick);
        $('#buttonTutorial').on('click', function(){ 
            if(turotialYetActivated){
                 $('#help').hide();
                 $('#game').show();
                turotialYetActivated = false;
            }
            else {
                 $('#help').show();
                 $('#game').hide();
                turotialYetActivated = true;
            }
            
        });
        levelChecker.init();
        timer();
    },
    
    _handleClick = function(e) { 
        switch(e.target.id){
                 
            case 'el1':
                window.open("../DesignURChar/index.html", '_self', false);
                break;
            case 'el2':
                window.open("../CheckURJava/index.html", '_self', false);
                break;
            case 'el3':
                window.open("../ProoveURselfinGoogle/index.html", '_self', false);
                break;
             
        }
        
    }
    
    timer = function(){
        time += 1;
        if(time<10)document.getElementById('time').firstChild.nodeValue = '0:0'+time;
        else if(time<60)document.getElementById('time').firstChild.nodeValue = '0:'+time;
        else if(time<600){
            if(time%60 < 10){
                document.getElementById('time').firstChild.nodeValue = ((time-time%60)/60)+':0'+time%60;
            }
        }
        else{
                document.getElementById('time').firstChild.nodeValue = ((time-time%60)/60)+':'+time%60;
        }
        setTimeout( timer, 1000);
    },  
        
    resetTimer = function(){
        time = 0;
    },
        
    getTime = function(){
        return time;
    }    
    ;

    that.getTime = getTime;
    that.resetTimer = resetTimer;
    that.init = init;
    return that;
})();