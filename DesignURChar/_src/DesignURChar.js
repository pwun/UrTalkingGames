var DesignURChar = {
    init: function() {
        "use strict";
        var consoleController = DesignURChar.ConsoleController;
        consoleController.init();
        var canvasController = DesignURChar.CanvasController.init(consoleController);
        DesignURChar.UIController.init(canvasController);
        
        DatabaseController.init();
        SamplesView.init();
    }
};