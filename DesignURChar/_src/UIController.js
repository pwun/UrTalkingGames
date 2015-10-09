DesignURChar.UIController = (function () {
    var that = {},
        canvasController,
        colors, 

        init = function (newCanvasController) {
            canvasController = newCanvasController;
            _initColors();
            _initMenu();
            _initCanvas();
            return that;
        },

        _initColors = function () {
            colors = $('#colors');
            colors.delegate('.color', 'click', _onColorClicked);
        },

        _initMenu = function () { 
            document.querySelector('#shapes').addEventListener('click', _onShapeClicked, false);
            document.querySelector('#saveButton').addEventListener('click', _onButtonClicked,false);
            document.querySelector('#quitButton').addEventListener('click', _onButtonClicked,false);
            document.querySelector('#clearButton').addEventListener('click', _onButtonClicked,false);
        },

        _initCanvas = function () {
            var active_color = colors.children().children('.color.active').css('background-color');
            canvasController.setColor(active_color);
        },
        _onShapeClicked = function(event) {
            canvasController.setShape(event.target.className.slice(6,event.target.className.length));
        },
        _onColorClicked = function (event) {
            var color_element = $(event.target);
            colors.children().children('.color').removeClass('active');
            color_element.addClass('active');
            canvasController.setColor(color_element.css('background-color'),color_element[0].classList[1]);

        },
        _onButtonClicked = function(event) {
             switch(event.target.id) {
                case 'quitButton':
                    window.location.replace("../index.html");
                    break;
                case 'saveButton':
                    var nickname = $('#nicknameInput').val();
                    if(nickname!=""){
                        DatabaseController.saveImage(nickname,canvasController.getDataUrl());
                        canvasController.clearCanvas();
                        $('#nicknameInput').val("")
                        
                    } else {
                        alert("Please enter a nickname before saving... :)");
                    }
                    break;
                case 'clearButton':
                    canvasController.clearCanvas();
                    break;
            }
            
        };

    that.init = init;

    return that;
})();