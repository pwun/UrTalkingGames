Game = (function() {
    var that = {},
        time = 0,
         
        
    init = function() {
        var turotialYetActivated = false;
        $('#logo').on('click', function(){ location.reload();});
        $('#newGame').on('click', function(){ location.reload();});
      
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
        $('#quit').on('click', function() {
            window.location.replace("../index.html");
        });
        levelChecker.init();
        timer();
    },
     
    
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