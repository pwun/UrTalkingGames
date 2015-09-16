levelChecker = (function() {
    var that = {},
        currentLevel = 1,
        
    init = function() { 
       levelManager.init();
       setupLevel();
       setupCanvas();
    },
        
    setupLevel = function(){
        document.getElementById('level').firstChild.nodeValue = currentLevel;
        switch(currentLevel){
               case 1: levelManager.prepareTools(2,1,3); break;
               case 2: levelManager.prepareTools(4,2,2); break;
               case 3: levelManager.prepareTools(2,2,2); break;
               case 4: levelManager.prepareTools(2,2,2); break;
               case 5: levelManager.prepareTools(2,2,2); break;
               default:levelManager.prepareTools(2,2,2); break;
       }
    },
        
    setupCanvas = function(){
        switch(currentLevel){
               case 1: $('#level1').show(); break;
               case 2: $('#level2').show(); $('#level1').hide(); break;
               case 3: $('#level3').show(); $('#level2').hide(); break;
               case 4: $('#level4').show(); $('#level3').hide(); break;
               case 5: $('#level5').show(); $('#level4').hide(); break;
               default:/*don't load anything into the canvas*/ break;
       }
    },
    
    setLevel = function(level){
        currentLevel = level;
        setupLevel();
        setupCanvas();
    },
        
    getLevel = function(){
        return currentLevel;
    }
    ;

    that.getLevel = getLevel;
    that.setLevel = setLevel; 
    that.init = init;
    return that;
})();