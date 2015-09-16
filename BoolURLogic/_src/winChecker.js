winChecker = (function() {
    var that = {},
        currentLevel = 1,
        levelWon = false;
        
    init = function() { 
        getLevel();
        setupWin();
        if(levelWon)doWin();
    },
        
    getLevel = function(){
        currentLevel = levelChecker.getLevel();
        levelWon = false;
    },
        
    setupWin = function(){
        switch(currentLevel){
               case 1:  if(( document.getElementById('1-level1').childElementCount > 0 
                             &&document.getElementById('1-level1').firstChild.getAttribute('alt')=='and' )
                             &&( document.getElementById('2-level1').childElementCount > 0 
                             &&document.getElementById('2-level1').firstChild.getAttribute('alt')=='or' ))
                             levelWon = true;
                        break;
               case 2:  if(( document.getElementById('1-level2').childElementCount > 0 
                             &&document.getElementById('1-level2').firstChild.getAttribute('alt')=='and' )
                             &&( document.getElementById('2-level2').childElementCount > 0 
                             &&document.getElementById('2-level2').firstChild.getAttribute('alt')=='or' )
                            &&( document.getElementById('3-level2').childElementCount > 0 
                             &&document.getElementById('3-level2').firstChild.getAttribute('alt')=='or' ))
                             levelWon = true;
                        break;
               case 3:  break;
               case 4:  break;
               case 5:  break;
               default: break;
       }
    },
    
    doWin = function(){
        levelChecker.setLevel(++currentLevel);
        $("#winString").show();
        $("#winString").delay(3000).hide(0);
        var score = document.getElementById('score').innerHTML,
            time  = document.getElementById('time').innerHTML,
            timeNum = Game.getTime(),
            scoreNum = 0;
        try {scoreNum = parseInt(score);}
        catch(Exeption){}
        scoreNum+=timeNum;
        $('#score').html(scoreNum);
        Game.resetTimer();
    } 
    ;
    
    that.init = init;
    return that;
})();