var PictureArray = (function () {
    var that = {},
        picArray = [
           { img: '_res/flugzeug.png', question: 'Wie lang ist die Landebahn auf dem dieses Flugzeug steht?', answer: '910' },
           { img: '_res/schnuersenkel.jpg', question: 'Wie nennt man das im roten Kreis markierte Objekt?', answer: 'Pinke' },
           { img: '_res/palstek.png', question: 'Wie heiﬂt dieser Knoten', answer: 'Palstek' }
        ],

        bla = "test",
        
       

    init = function () {
       
    },

    getPicArray = function(){
        return picArray;
    }
    ;

    that.getPicArray = getPicArray;
    that.init = init;
    return that;
})();