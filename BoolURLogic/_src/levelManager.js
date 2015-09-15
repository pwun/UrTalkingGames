levelManager = (function() {
    var that = {},
        canvas = null,
        ctx = null,
        currentLevel = 1,
        and = null,
        or = null,
        not = null,
        dropCounter = 0;
        
    init = function() { 
       canvas=document.getElementById("canvas");
       //ctx=canvas.getContext('2d');
       and = '<img id="and" alt="and" class="icon scale" src="_res_BURL/and.png/" draggable="true" ondragstart="drag(event)">';
       or = '<img id="or" alt="or" class="icon scale" src="_res_BURL/or.png/" draggable="true" ondragstart="drag(event)">';
       not = '<img id="not" alt="not" class="icon scale" src="_res_BURL/not.png/" draggable="true" ondragstart="drag(event)">';
       if(currentLevel == 1){
           prepareTools(2,1,2);
       }
       //$('#canvas').on('click', function(){ prepareTools(0,1,5);});
    },
        
    prepareTools = function(ta,to,tn){
         $('#tools').empty();
         if(ta > 0){
           $('#tools').append(and);
           $('#tools').append('<div class="number-icon scale">'+ta+'</div>');
         }
         if(to > 0){
           $('#tools').append(or);
           $('#tools').append('<div class="number-icon scale">'+to+'</div>');
         }
        if(tn > 0){
           $('#tools').append(not);
           $('#tools').append('<div class="number-icon scale">'+tn+'</div>');
        }
    }
        
    allowDrop = function (ev) {
        ev.preventDefault();
    },

    drag = function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    },

    drop = function (ev) {
        dropCounter+=1;
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
       // ev.target.appendChild(data);
        var img = new Image();
        img.src = "_res_BURL/"+data+".png/";
        var id = 'drop'+dropCounter;
        img.setAttribute('id',id);
        img.setAttribute('class','scale');
        ev.target.appendChild(img);
        $(document).on('click','#'+id,function(){
            ev.target.removeChild(img);
        });
        
    }
    ;

    that.init = init;
    return that;
})();