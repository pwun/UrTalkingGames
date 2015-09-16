DesignURChar.UIController = (function () {
    var that = {},
        canvasController,
        colors,menu,

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
            document.querySelector('#saveButton').addEventListener('click', _onSaveClicked,false);
        },

        _initCanvas = function () {
            var active_color = colors.children('.color.active').css('background-color');
            canvasController.setColor(active_color);
         },
        _onShapeClicked = function(event) {
            console.log(event.target.className);
            canvasController.setShape(event.target.className.slice(6,event.target.className.length));
            
        },
        _onColorClicked = function (event) {
            var color_element = $(event.target);
            colors.children('.color').removeClass('active');
            color_element.addClass('active');
            canvasController.setColor(color_element.css('background-color'));
        },
        _onSaveClicked = function(event) {
            DesignURChar.DatabaseController.saveImage(canvasController.getDataUrl());
        };

    that.init = init;

    return that;
})();