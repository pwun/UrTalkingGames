DesignURChar.CanvasController = (function () {
   
    var that = {},
        DEFAULT_LINE_WIDTH = 5,
        canvas,
        context,
        consoleController,
        mouse = {
            last_x: -1,
            last_y: -1,
            down: false,
            dragDistanceX:0,
            dragDistanceY:0,
            dragStartX:0,
            dragStartY:0
        },
         
        boxes = [],
        mySelShape='line', mySelColor = 'red',mySelColorName='red',
 
         
        init = function (newConsoleController) {
                      
            
            consoleController = newConsoleController;
            _initCanvas();
             
            console.log("tatsächliche größe",canvas.width,canvas.height);
            console.log("scroll größe", canvas.scrollWidth,canvas.scrollHeight);
            canvas.width = canvas.scrollWidth;
            canvas.height = canvas.scrollHeight;
            
            return that;
        },
        _initCanvas = function() {
            canvas = document.querySelector('#canvas');   
            context = canvas.getContext('2d');
            canvas.addEventListener('mousemove', _onMouseMoved, false);
            canvas.addEventListener('mouseleave', _onMouseLeft, false);
            canvas.addEventListener('mousedown', _onMouseDown, false);
            canvas.addEventListener('mouseup', _onMouseUp, false);
            canvas.onselectstart = function() {return false;}
        },
        
        /** Mouse-Events */
        _onMouseDown = function (event) {
            mouse.down = true;
            mouse.dragStartX = mouse.last_x;
            mouse.dragStartY = mouse.last_y;
            
        },

        _onMouseUp = function (event) {
            
            mouse.dragDistanceX = mouse.last_x - mouse.dragStartX;
            mouse.dragDistanceY = mouse.last_y - mouse.dragStartY;
            mouse.down = false; 
            
            switch(mySelShape) {
                case 'rect':
                    drawRect(mouse.last_x-mouse.dragDistanceX,mouse.last_y-mouse.dragDistanceY,mouse.dragDistanceX,mouse.dragDistanceY);
                    break;
                case 'circle':
                    drawCircle(mouse.last_x-mouse.dragDistanceX,mouse.last_y-mouse.dragDistanceY,mouse.dragDistanceX);
                    break;
                case 'star':
                    drawStar(mouse.last_x-mouse.dragDistanceX,mouse.last_y-mouse.dragDistanceY,mouse.dragDistanceX, 5, 0.5);
                    break;
            }
           
        },

        _onMouseMoved = function (event) {
        var new_x = event.offsetX,
                new_y = event.offsetY;
            
            if (mySelShape=='line' && mouse.last_x != -1 && mouse.last_y != -1) {
                if (!mouse.down) {
                    mouse.last_x = new_x;
            mouse.last_y = new_y;
                return;
            }
                drawLine(mouse.last_x, mouse.last_y, new_x, new_y);
            }
            mouse.last_x = new_x;
            mouse.last_y = new_y;
            
           
        },
        _onMouseLeft = function (event) {
            mouse.last_x = -1;
            mouse.last_y = -1;
            mouse.down = false;
        },
        
        /** Setter-Methoden für Canvas */
        setColor = function(newColor,newColorName) {
            mySelColor = newColor;
            mySelColorName = newColorName;
            consoleController.onSelectionChanged(mySelShape,mySelColorName);

         },
        setShape = function(newShape) {
            mySelShape = newShape;  
            console.log(mySelShape);
            consoleController.onSelectionChanged(mySelShape,mySelColorName);
             
        },
       
        /** Draw-Methoden */
        
        drawCircle = function(x,y,rad) {
            consoleController.onCircleCreated(x,y,rad)
            rad = Math.abs(rad);
            context.beginPath();
            context.arc(x,y,rad/2, 0, 2 * Math.PI);
            context.fillStyle = mySelColor;
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#dadada';
            context.stroke();
        },
        drawRect = function(x,y,w,h) {
            consoleController.onRectCreated(x,y,w,h);
            context.beginPath();
            context.rect(x, y, w, h);
            context.fillStyle = mySelColor; 
            context.fill();
            context.lineWidth = 4;
            context.strokeStyle = 'black';
            context.stroke();
        },
        drawStar = function(x,y,r,p,m){
            consoleController.onStarCreated(x,y,r)
            context.fillStyle = mySelColor;
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
        },
        drawLine = function (x1, y1, x2, y2) {
            consoleController.onLineCreated(x2,y2,mySelColorName);
            context.strokeStyle = mySelColor;
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.closePath();
        },
        getDataUrl = function() {
            return canvas.toDataURL();
        };
    
    that.setColor = setColor;
    that.setShape = setShape;   
    that.getDataUrl = getDataUrl;
    that.init = init;

    return that;
   
})();