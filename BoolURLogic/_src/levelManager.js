levelManager = (function() {
    var that = {},
        and = null,
        or = null,
        not = null,
        nand = null,
        nor = null,
        kabel = null,
        dropCounter = 1;
        
    init = function() { 
       and = '<img id="and" alt="and"    class="icon scale left" src="_res_BURL/and.png/"   draggable="true" ondragstart="drag(event)">';
       or =  '<img id="or"  alt="or"     class="icon scale left" src="_res_BURL/or.png/"    draggable="true" ondragstart="drag(event)">';
       not = '<img id="not" alt="not"    class="icon scale left" src="_res_BURL/not.png/"   draggable="true" ondragstart="drag(event)">';
       nand = '<img id="nand" alt="nand" class="icon scale left" src="_res_BURL/nand.png/"  draggable="true" ondragstart="drag(event)">';
       nor = '<img id="nor" alt="nor"    class="icon scale left" src="_res_BURL/nor.png/"   draggable="true" ondragstart="drag(event)">';
       kabel = '<img id="kabel" alt="kabel" class="icon scale left" src="_res_BURL/kabel.png/" draggable="true" ondragstart="drag(event)">';
    },
        
    prepareTools = function(ta,to,tn,tna,tno,tca){
         $('#tools').empty();
         if(ta > 0){
           $('#tools').append(and);
           $('#tools').append('<div id="andCount" class="number-icon scale margeLeft">'+ta+'</div>');
         }
         if(tna > 0){
           $('#tools').append(nand);
           $('#tools').append('<div id="nandCount" class="number-icon scale margeLeft">'+tna+'</div>');
         }
         if(to > 0){
           $('#tools').append(or);
           $('#tools').append('<div id="orCount" class="number-icon scale margeLeft">'+to+'</div>');
          }
        
         if(tno > 0){
           $('#tools').append(nor);
           $('#tools').append('<div id="norCount" class="number-icon scale margeLeft">'+tno+'</div>');
         }
         if(tca > 0){
           $('#tools').append(kabel);
           $('#tools').append('<div id="kabelCount" class="number-icon scale margeLeft">'+tca+'</div>');
         }
         if(tn > 0){
           $('#tools').append(not);
           $('#tools').append('<div id="notCount" class="number-icon scale margeLeft">'+tn+'</div>');
         }
    }
        
    allowDrop = function (ev) {
        ev.preventDefault();
    },

    drag = function (ev) {
        ev.dataTransfer.setData("info", ev.target.id);
    },

    drop = function (ev) {
        //Init drop
        ev.preventDefault();
        
        //Check if drop is possible
        var data = ev.dataTransfer.getData("info"),
            checkNum = 0;
        try{var content = document.getElementById(data+'Count').innerHTML;}
        catch(Exception){return null;}
            
        try {checkNum = parseInt(content);}
        catch(Exeption){}
        
        if(checkNum > 0){//if there are still more of this gatter available
            putGatterIn(ev, data, content, checkNum);
        }
        winChecker.init();
    },
        
    putGatterIn = function(ev, data,content, checkNum){
            //Change the number of the current gatter
            document.getElementById(data+'Count').innerHTML = --checkNum;
            
            //Create new Picture
            var img = new Image();
            img.src = "_res_BURL/"+data+".png/";
            img.setAttribute('alt',data);
            img.setAttribute('class','scale');
        
            //This is just for the click listener
            var id = 'drop'+ (++dropCounter);
            img.setAttribute('id',id);
            
            if(ev.target.nodeName == "IMG") {// if there is already a picture in,
                
                //edit its abailable content
                var image = document.getElementById(ev.target.id),
                    alt = image.getAttribute('alt'),
                    parent = image.parentNode,
                    contentOld = document.getElementById(alt+'Count').innerHTML,
                    checkNumOld = 0;
                try {checkNumOld = parseInt(contentOld);}
                catch(Exeption){};
                document.getElementById(alt+'Count').innerHTML = (++checkNumOld);
                
                //Remove old gatter
                parent.removeChild(parent.firstChild);
                
                //Add new gatter
                appender(parent, img, checkNum, id, data);
            }
            else{// if there is nothing in the target
                
                appender(ev.target, img, checkNum, id, data);
            }
    },    
        
        
    appender = function(parent, img, checkNum, id, data){
                parent.appendChild(img);
                $(document).on('click','#'+id,function(){
                    console.log("remove");
                    parent.removeChild(img);
                    document.getElementById(data+'Count').innerHTML = ++checkNum;
                });
    }
    ;

    that.prepareTools = prepareTools;
    that.init = init;
    return that;
})();