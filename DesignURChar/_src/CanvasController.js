DesignURChar.CanvasController = (function () {
   
    var that = {},
        DEFAULT_LINE_WIDTH = 5,
        canvas,
        context,consoleController,
        mouse = {
            last_x: -1,
            last_y: -1,
            down: false,
            dragDistanceX:0,
            dragDistanceY:0,
            dragStartX:0,
            dragStartY:0
        },
        INTERVAL = 20,
        canvasValid = false, boxes = [],
        selectionHandles = [],
        mySelShape='rect', mySelColor = '#CC0000',
 
         
        init = function (newConsoleController) {
            consoleController = newConsoleController;
            canvas = document.querySelector('#canvas');   
            console.log(canvas);
            //canvas.width = canvas.scrollWidth;
           // canvas.height = canvas.scrollHeight;
            context = canvas.getContext('2d');
            canvas.addEventListener('mousemove', _onMouseMoved, false);
            canvas.addEventListener('mouseleave', _onMouseLeft, false);
            canvas.addEventListener('mousedown', _onMouseDown, false);
            canvas.addEventListener('mouseup', _onMouseUp, false);
            canvas.addEventListener('dblclick', _onDoubleClick, false);
            canvas.onselectstart = function() {return false;}
             setInterval(mainDraw,INTERVAL);
            
            return that;
        },
        
        mainDraw = function() {
            if(canvasValid == false) { 
                for (var i = 0; i < boxes.length; i++) {
                    var el = boxes[i];
                   
                    boxes[i].draw(context);
                    }
                canvasValid = true;
                }
        },
        
        getDataUrl = function() {
            return canvas.toDataURL();
        },
         
        _onDoubleClick = function(event) {
            addBox(mouse.last_x,mouse.last_y,50,50,mySelColor,mySelShape);
        },
        
     

        _onMouseDown = function (event) {
            mouse.dragStartX = mouse.last_x;
            mouse.dragStartY = mouse.last_y;
            console.log("mouse down on",mouse.last_x,mouse.last_y);
            mouse.down = true;
        },

        _onMouseUp = function (event) {
            
            mouse.dragDistanceX = mouse.last_x - mouse.dragStartX;
            mouse.dragDistanceY = mouse.last_y - mouse.dragStartY;
            
            console.log("dragDistance", mouse.dragDistanceX,mouse.dragDistanceY);
            mouse.down = false;
          
            addBox(mouse.last_x-mouse.dragDistanceX,mouse.last_y-mouse.dragDistanceY,mouse.dragDistanceX,mouse.dragDistanceY,mySelColor,mySelShape);
           
        },

        _onMouseMoved = function (event) {
            var new_x = event.offsetX,
                new_y = event.offsetY; //unnc
            
            mouse.last_x = new_x;
            mouse.last_y = new_y;
            console.log(mouse.last_x,mouse.last_y);
            if (mouse.down) {
                console.log("dragging",mouse.last_x,mouse.last_y);
            }
            if (mouse.last_x != -1 && mouse.last_y != -1) {
           //     _drawLine(mouse.last_x, mouse.last_y, new_x, new_y);
            }
           
        },

        _onMouseLeft = function (event) {
            mouse.last_x = -1;
            mouse.last_y = -1;
            mouse.down = false;
        },
        setColor = function(newColor) {
            mySelColor = newColor;
            consoleController.selected(mySelShape,mySelColor);
         },
        setShape = function(newShape) {
            mySelShape = newShape;  
            consoleController.selected(mySelShape,mySelColor);
             
        },
        addBox = function(x,y,w,h,fill,shape) {
            var box = new Box;
              box.x = x;
              box.y = y;
              box.w = w
              box.h = h;
              box.fill = fill;
              box.shape = shape;
              boxes.push(box);
              canvasValid= false;
            console.log("new Box",x,y,w,h,fill,shape);
            consoleController.created(x,y,w,h,fill,shape);
         },
        
        drawCircle = function(x,y,rad,color) {
            rad = Math.abs(rad);
            context.beginPath();
            context.arc(x,y,rad/2, 0, 2 * Math.PI);
            context.fillStyle = color;
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#dadada';
            context.stroke();
        },
        drawRect = function(x,y,w,h,color) {
            context.beginPath();
            context.rect(x, y, w, h);
            context.fillStyle = color;//'yellow';
            context.fill();
            context.lineWidth = 4;
            context.strokeStyle = 'black';
            context.stroke();
        },
        drawTriangle = function(x,y,w,h,color) {
            context.beginPath();
             context.fillStyle = color;
            context.moveTo(x,y);
            context.lineTo(w,x);
            context.lineTo(w,h);
        
            context.fill();
        },
        drawStar = function(x,y,r,p,m){
            context.fillStyle = 'red';
            context.save();
            context.beginPath();
            context.translate(x,y);
            context.moveTo(0,0-r);
            for(var i =0;i<p;i++) {
                context.rotate(Math.PI / p);
                context.lineTo(0,0 -(r*m));
                context.rotate(Math.PI / p);
                context.lineTo(0,0 -r);
            }
            context.fill();
            context.restore();
        };
    
    

 
    that.setColor = setColor;
    that.setShape = setShape;   
    that.getDataUrl = getDataUrl;
    that.init = init;

    return that;
    
    
  function Box() {
        this.x = 0;
        this.y = 0;
        this.w = 1;  
        this.h = 1;
        this.fill = '#444444';
        this.shape = 'rect';
        this.draw = function(newContext) {
            switch(this.shape) {
                case 'rect':
                    drawRect(this.x,this.y,this.w,this.h,this.fill);
                    break;
                case 'circle':
                    drawCircle(this.x,this.y,this.w,this.fill);
                    break;
                case 'triangle':
                    drawTriangle(this.x,this.y,this.w,this.h,this.fill);
                    break;
                case 'star':
                    drawStar(100, 100, 90, 5, 0.5);
                    break;
            }
        };
}
 
     
  
})();