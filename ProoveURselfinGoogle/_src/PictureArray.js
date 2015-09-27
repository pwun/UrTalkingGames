var PictureArray = (function () {
    var that = {},
        picArray = [
           { img: '_res/flugzeug.png', question: 'Wie lang ist die Landebahn auf dem dieses Flugzeug steht?', answer: '910' },
           { img: '_res/schnuersenkel.jpg', question: 'Wie nennt man das im roten Kreis markierte Objekt?', answer: 'Pinke' },
           { img: '_res/palstek.png', question: 'Wie nennt man diesen Knoten', answer: 'Palstek' },
           { img: '_res/kornnatter.jpg', question: 'Welche Schlangenart ist das?', answer: 'Kornnatter' },
           { img: '_res/wespenspinne.jpg', question: 'Welche Spinnenart ist das?', answer: 'Wespenspinne' },
           { img: '_res/tesla.jpg', question: 'In welchem Jahr starb der Sohn dieser Person?', answer: '1943' },
           { img: '_res/Briefmarke.png', question: 'Was ist das Jahr der Ausgabe dieser Briefmarke?', answer: '1962' },
           { img: '_res/Eiskunst.jpg', question: 'Welchen Platz belegte diese Eiskunstläuferin in ihrerer ersten Winterolympiade?', answer: '12' },
           { img: '_res/Bild.png', question: 'In welcher Stadt ist der Künstler diese Bildes gestorben?', answer: 'Rom' },

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