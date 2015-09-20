var PictureArray = (function () {
    var that = {},
        picArray = [
           { img: '_res/flugzeug.png', question: 'Wie lang ist die Landebahn auf dem dieses Flugzeug steht?', answer: '910' },
           { img: '_res/schnuersenkel.jpg', question: 'Wie nennt man das im roten Kreis markierte Objekt?', answer: 'Pinke' },
           { img: '_res/palstek.png', question: 'Wie nennt man diesen Knoten', answer: 'Palstek' },
           { img: '_res/koenigsnatter.jpg', question: 'Welche Schlangenart ist das?', answer: 'Königsnatter' },
           { img: '_res/wespenspinne.jpg', question: 'Welche Spinnenart ist das?', answer: 'Wespenspinne' },
           { img: '_res/tesla.jpg', question: 'In welchem Jahr starb der Sohn dieser Person?', answer: '1943' },

        ],       
       

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