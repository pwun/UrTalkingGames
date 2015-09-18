winChecker = (function() {
    var that = {},
        currentLevel = 1,
        levelWon = false,
        
    init = function() { 
        getLevel();
        setupWin();
        if(levelWon){
            if(currentLevel<5)doWin();
            else doAbsoluteWin();
        }
    },
        
    getLevel = function(){
        currentLevel = levelChecker.getLevel();
        levelWon = false;
    },
        
    setupWin = function(){
        switch(currentLevel){
               case 1:  if(( document.getElementById('1-level1').childElementCount > 0 
                             &&document.getElementById('1-level1').firstChild.getAttribute('alt')==('or') ))
                             levelWon = true;
                        break;
               case 2:  if(( document.getElementById('1-level2').childElementCount > 0 
                             &&document.getElementById('1-level2').firstChild.getAttribute('alt')=='kabel' )
                             &&( document.getElementById('2-level2').childElementCount > 0 
                             &&document.getElementById('2-level2').firstChild.getAttribute('alt')=='not' ))
                             levelWon = true;
                        break;
               case 3:  if(( document.getElementById('1-level3').childElementCount > 0 
                             &&document.getElementById('1-level3').firstChild.getAttribute('alt')==('nor') ))
                             levelWon = true;
                        break;
               case 4:  if(( document.getElementById('1-level4').childElementCount > 0 
                             &&document.getElementById('1-level4').firstChild.getAttribute('alt')=='and' )
                             &&( document.getElementById('2-level4').childElementCount > 0 
                             &&document.getElementById('2-level4').firstChild.getAttribute('alt')=='or' ))
                             levelWon = true;
                        break;
               case 5:  if(( document.getElementById('1-level5').childElementCount > 0 
                             &&document.getElementById('1-level5').firstChild.getAttribute('alt')=='kabel' )
                            &&( document.getElementById('2-level5').childElementCount > 0 
                             &&document.getElementById('2-level5').firstChild.getAttribute('alt')=='nand' )
                             &&( document.getElementById('3-level5').childElementCount > 0 
                             &&document.getElementById('3-level5').firstChild.getAttribute('alt')=='kabel' ))
                             levelWon = true;
                        break;
               default: break;
       }
    },
    
    doWin = function(){
        setTimeout(function(){
            levelChecker.setLevel(++currentLevel);
        }, 2000);
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
    },
        
    doAbsoluteWin = function(){
        setTimeout(function(){
            window.open("../index.html", '_self', false);
        }, 5000);
        $("#winString").html('Sie haben das Spiel gemeistert. In wenigen Minuten kehren Sie zum Hauptmenü zurück.');
        $("#winString").show();
        $("#winString").delay(5000).hide(0);
        DatabaseController.setBoolHighscore(document.getElementById('score').innerHTML);
        
    }
    
    ;
    
    that.init = init;
    return that;
})();