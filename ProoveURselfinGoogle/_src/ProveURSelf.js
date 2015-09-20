var ProveURSelf = (function () {
    var that = {},
        $canvas,
        time = 0,
        $question,
        $pic,
        $answer,
        $enter,
        $skip,
        $start,
        currentIndex,
        allTime = 0,
        indexArray = new Array(),
        numOfPicPerGame = 6,

    init = function () {
        PictureArray.init();
        getElements();
        $skip.prop('disabled', true);
        $enter.prop('disabled', true);
        $answer.prop('disabled', true);
        $skip.on('click', onSkip);
        $start.on('click', startGame);
        $enter.on('click', checkAnswer);
        $('#playAgain').on('click', function () { location.reload(); })
    },

    getElements = function () {
        $canvas = $('#canvas');
        $question = $('#question');
        $answer = $('#answer');
        $pic = $('#pic');
        $enter = $('#enter');
        $skip = $('#skip');
        $start = $('#start');
    },

    startGame = function(){
        $start.hide();
        timer();
        getRandomPicture();
        $skip.prop('disabled', false);
        $enter.prop('disabled', false);
        $answer.prop('disabled', false);
    },

    onSkip = function() {
        getRandomPicture();
        resetTimer();
        addAllTime(180);
        updateAllTime();
        $answer.val('');

    },

    checkAnswer = function () {
        if ($answer.val().toLowerCase() == PictureArray.getPicArray()[currentIndex].answer.toLowerCase()) {
            allTime += getTime();
            updateAllTime();
            resetTimer();
            getRandomPicture();
            $answer.val('');
        } else {
            $('#failText').attr('style', "display: inline-block"); 
            $("#failText").show().delay(3000).fadeOut();
        }
    },


    timer = function () {
        time += 1;
        if (time < 10) document.getElementById('time').firstChild.nodeValue = '0:0' + time;
        else if (time < 60) document.getElementById('time').firstChild.nodeValue = '0:' + time;
        else if (time < 600) {
            if (time % 60 < 10) {
                document.getElementById('time').firstChild.nodeValue = ((time - time % 60) / 60) + ':0' + time % 60;
            }
        }
        else {
            document.getElementById('time').firstChild.nodeValue = ((time - time % 60) / 60) + ':' + time % 60;
        }
        setTimeout(timer, 1000);
    },

    resetTimer = function () {
        time = 0;
    },

    getTime = function () {
        return time;
    }

    addAllTime = function (failtime) {
        allTime += failtime;
    }

    updateAllTime = function () {
        if (allTime < 10) document.getElementById('allTime').firstChild.nodeValue = '0:0' + allTime;
        else if (allTime < 60) document.getElementById('allTime').firstChild.nodeValue = '0:' + allTime;
        else if (allTime < 600) {
            if (allTime % 60 < 10) {
                document.getElementById('allTime').firstChild.nodeValue = ((allTime - allTime % 60) / 60) + ':0' + allTime % 60;
            }
        }
        else {
            document.getElementById('allTime').firstChild.nodeValue = ((allTime - allTime % 60) / 60) + ':' + allTime % 60;
        }
    },

    getRandomPicture = function () {
        var index = getNewRandomIndex();
        console.log(index);
        $question.text(PictureArray.getPicArray()[index].question);
        $pic.attr("src", PictureArray.getPicArray()[index].img);
    },

    getRandomIndex = function() {
        return Math.floor((Math.random() * PictureArray.getPicArray().length));
    }

    getNewRandomIndex = function () {
        if (indexArray.length == numOfPicPerGame) {
            $skip.prop('disabled', true);
            $enter.prop('disabled', true);
            $answer.prop('disabled', true);
            $('#playAgain').attr('style', "display: inline-block");
        } else {
            console.log(indexArray);
            var index = getRandomIndex();
            for (var i = 0; i < indexArray.length; i++) {
                if (indexArray[i] == index) {
                    index = getRandomIndex();
                    i = -1;
                    continue;
                }
            }
        }
        indexArray.push(index);
        currentIndex = index;
        return index;
    }
    ;
    
    that.getElements = getElements;
    that.init = init;
    return that;
})();